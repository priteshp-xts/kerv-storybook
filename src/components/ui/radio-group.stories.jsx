import { RadioGroup, RadioGroupItem } from './radio-group';

export default {
  title: 'Components/Radio Group',
  component: RadioGroup,
  parameters: {
    layout: 'centered',
    controls: { expanded: true },
  },
};

export const Default = {
  render: () => (
    <RadioGroup defaultValue="option-one" className="gap-3">
      <div className="flex items-center gap-3">
        <RadioGroupItem value="option-one" id="option-one" />
        <label htmlFor="option-one" className="text-sm font-medium leading-none">
          Option One
        </label>
      </div>
      <div className="flex items-center gap-3">
        <RadioGroupItem value="option-two" id="option-two" />
        <label htmlFor="option-two" className="text-sm font-medium leading-none">
          Option Two
        </label>
      </div>
    </RadioGroup>
  ),
};
