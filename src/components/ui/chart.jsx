import React from 'react';
import {
  Cell,
  CartesianGrid,
  Legend,
  Pie,
  PieChart,
  ResponsiveContainer,
  Scatter,
  ScatterChart,
  Tooltip,
  XAxis,
  YAxis,
  ZAxis,
} from 'recharts';
import { cn } from '../../lib/utils';

const ChartContext = React.createContext(null);

function useChart() {
  const context = React.useContext(ChartContext);

  if (!context) {
    throw new Error('Chart components must be used within <ChartContainer>.');
  }

  return context;
}

const ChartContainer = React.forwardRef(({ id, className, config = {}, children, ...props }, ref) => {
  const chartId = React.useId();
  const resolvedId = id ?? `chart-${chartId}`;

  return (
    <ChartContext.Provider value={{ config, id: resolvedId }}>
      <div ref={ref} className={cn('w-full', className)} {...props}>
        {children}
      </div>
    </ChartContext.Provider>
  );
});
ChartContainer.displayName = 'ChartContainer';

const ChartTooltipContent = React.forwardRef(
  (
    {
      active,
      payload,
      label,
      labelKey = 'label',
      nameKey = 'name',
      indicator = 'dot',
      hideLabel = false,
      hideIndicator = false,
      className,
    },
    ref
  ) => {
    const { config } = useChart();

    if (!active || !payload?.length) {
      return null;
    }

    const items = payload.filter((item) => item?.value !== undefined && item?.value !== null);

    return (
      <div
        ref={ref}
        className={cn(
          'rounded-xl border border-border bg-background p-3 text-sm shadow-md',
          className
        )}
      >
        {!hideLabel ? (
          <div className="mb-2 font-medium text-foreground">
            {config[label]?.label ?? label}
          </div>
        ) : null}
        <div className="space-y-1">
          {items.map((item) => {
            const dataKey = item.dataKey;
            const resolvedKey = item.payload?.[nameKey] ?? item.value ?? dataKey;
            const entry = config[resolvedKey] ?? config[dataKey] ?? {};
            const itemName = entry.label ?? resolvedKey;
            const seriesClassName = entry.className ?? item.className ?? 'text-foreground';

            return (
              <div key={dataKey} className="flex items-center gap-2 text-muted-foreground">
                {!hideIndicator ? (
                  <span
                    className={cn(
                      'inline-flex shrink-0 rounded-full bg-current',
                      indicator === 'line' ? 'h-0.5 w-4' : 'h-2.5 w-2.5',
                      indicator === 'dashed' ? 'border border-dashed border-current bg-transparent' : '',
                      seriesClassName
                    )}
                  />
                ) : null}
                <span className="text-foreground">{itemName}:</span>
                <span>{item.value}</span>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
);
ChartTooltipContent.displayName = 'ChartTooltipContent';

const ChartTooltip = ({ content, ...props }) => {
  return <Tooltip content={content} {...props} />;
};

const ChartBubbleTooltipContent = React.forwardRef(
  (
    {
      active,
      payload,
      titleKey = 'category',
      valueKey = 'value',
      nameKey = 'name',
      className,
    },
    ref
  ) => {
    const { config } = useChart();

    if (!active || !payload?.length) {
      return null;
    }

    const point = payload[0];
    const pointData = point?.payload ?? {};
    const resolvedKey = point?.name ?? pointData?.[nameKey] ?? point?.dataKey;
    const entry = config[resolvedKey] ?? {};
    const seriesLabel = entry.label ?? resolvedKey;
    const seriesClassName = entry.className ?? point?.className ?? 'text-foreground';
    const title = pointData?.[titleKey] ?? pointData?.category ?? seriesLabel;
    const value = pointData?.[valueKey] ?? point?.value;

    return (
      <div
        ref={ref}
        className={cn(
          'rounded-xl border border-slate-700 bg-slate-900 px-3 py-2 text-xs text-white shadow-lg',
          className
        )}
      >
        <div className="mb-1 font-semibold text-white">{title}</div>
        <div className="flex items-center gap-2 text-slate-300">
          <span className={cn('inline-flex h-2.5 w-2.5 shrink-0 rounded-full bg-current', seriesClassName)} />
          <span>{seriesLabel}</span>
          <span className="font-medium text-white">{value}</span>
        </div>
      </div>
    );
  }
);
ChartBubbleTooltipContent.displayName = 'ChartBubbleTooltipContent';

const ChartLegendContent = React.forwardRef(
  ({ payload, nameKey = 'name', className }, ref) => {
    const { config } = useChart();

    if (!payload?.length) {
      return null;
    }

    return (
      <div ref={ref} className={cn('flex flex-wrap items-center gap-4', className)}>
        {payload.map((entry) => {
          const resolvedKey = entry.payload?.[nameKey] ?? entry.value ?? entry.dataKey;
          const item = config[resolvedKey] ?? {};
          const label = item.label ?? resolvedKey;
          const seriesClassName = item.className ?? entry.className ?? 'text-foreground';

          return (
            <div key={resolvedKey} className="flex items-center gap-2 text-sm text-muted-foreground">
              <span className={cn('h-2.5 w-2.5 rounded-full bg-current', seriesClassName)} />
              <span>{label}</span>
            </div>
          );
        })}
      </div>
    );
  }
);
ChartLegendContent.displayName = 'ChartLegendContent';

const ChartLegend = ({ content, ...props }) => {
  return <Legend content={content} {...props} />;
};

const ChartDonut = ({
  data,
  config,
  dataKey = 'value',
  nameKey = 'name',
  innerRadius = 70,
  outerRadius = 100,
  showLegend = true,
  className,
}) => {
  return (
    <ChartContainer config={config} className={cn('h-[320px] w-full', className)}>
      <ResponsiveContainer width="100%" height="100%">
        <PieChart>
          <Tooltip content={<ChartTooltipContent hideLabel nameKey={nameKey} />} />
          {showLegend ? <Legend content={<ChartLegendContent nameKey={nameKey} />} /> : null}
          <Pie
            data={data}
            dataKey={dataKey}
            nameKey={nameKey}
            innerRadius={innerRadius}
            outerRadius={outerRadius}
            paddingAngle={2}
            stroke="none"
          >
            {data.map((entry) => (
              <Cell
                key={entry[nameKey]}
                fill="currentColor"
                className={config[entry[nameKey]]?.className ?? entry.className ?? 'text-foreground'}
              />
            ))}
          </Pie>
        </PieChart>
      </ResponsiveContainer>
    </ChartContainer>
  );
};

const ChartBubble = ({
  series = [],
  config,
  xKey = 'index',
  yKey = 'value',
  zKey = 'size',
  className,
  heightClassName = 'h-[620px]',
  showLegend = false,
  yDomain = [0, 9],
  xDomain = [0.5, 10.5],
  xTicks,
  xTickAngle = -32,
  xTickHeight = 96,
  xTickFormatter,
}) => {
  return (
    <ChartContainer config={config} className={cn('w-full', heightClassName, className)}>
      <ResponsiveContainer width="100%" height="100%">
        <ScatterChart margin={{ top: 24, right: 24, bottom: 72, left: 24 }}>
          <CartesianGrid stroke="#e8eef7" />
          <XAxis
            type="number"
            dataKey={xKey}
            domain={xDomain}
            ticks={xTicks}
            tickFormatter={xTickFormatter}
            allowDecimals={false}
            tickLine={false}
            axisLine={false}
            tick={{ fill: '#64748b', fontSize: 11 }}
            angle={xTickAngle}
            textAnchor="end"
            height={xTickHeight}
          />
          <YAxis
            type="number"
            dataKey={yKey}
            name={yKey}
            hide
            domain={yDomain}
            allowDecimals={false}
          />
          <ZAxis dataKey={zKey} range={[70, 260]} />
          <Tooltip content={<ChartBubbleTooltipContent titleKey="category" valueKey={yKey} />} />
          {showLegend ? <Legend content={<ChartLegendContent />} /> : null}
          {series.map((item) => (
            <Scatter
              key={item.name}
              name={item.name}
              data={item.data}
              fill="currentColor"
              stroke="currentColor"
              strokeWidth={1.5}
              fillOpacity={0.28}
              className={cn(item.className, 'transition-colors')}
            />
          ))}
        </ScatterChart>
      </ResponsiveContainer>
    </ChartContainer>
  );
};

export {
  ChartContainer,
  ChartBubble,
  ChartDonut,
  ChartLegend,
  ChartLegendContent,
  ChartTooltip,
  ChartTooltipContent,
  ChartBubbleTooltipContent,
};
