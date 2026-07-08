import { Progress, ProgressLabel, ProgressValue } from './progress';

export default {
  title: 'UI/Progress',
  component: Progress,
  parameters: {
    layout: 'centered',
    controls: { expanded: true },
  },
};

export const LabelAndValue = {
  render: () => (
    <Progress value={56} className="mx-auto" style={{ width: '720px' }}>
      <div className="flex items-center justify-between">
        <ProgressLabel>Upload progress</ProgressLabel>
        <ProgressValue />
      </div>
    </Progress>
  ),
};
