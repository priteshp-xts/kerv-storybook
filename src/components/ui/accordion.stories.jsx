import { Card, CardContent, CardHeader, CardTitle } from './card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from './accordion';

const items = [
  {
    value: 'item-1',
    title: 'How do I reset my password?',
    content:
      "Click on 'Forgot Password' on the login page, enter your email address, and we'll send you a link to reset your password. The link will expire in 24 hours.",
  },
  {
    value: 'item-2',
    title: 'Can I change my subscription plan?',
    content:
      'Yes. You can upgrade or downgrade your plan from the billing settings at any time.',
  },
  {
    value: 'item-3',
    title: 'What payment methods do you accept?',
    content:
      'We accept all major credit cards and several local payment options depending on your region.',
  },
];

function AccordionExample({ type = 'single', className, defaultValue }) {
  return (
    <Accordion type={type} collapsible={type === 'single'} defaultValue={defaultValue} className={className}>
      {items.map((item) => (
        <AccordionItem key={item.value} value={item.value}>
          <AccordionTrigger>{item.title}</AccordionTrigger>
          <AccordionContent>{item.content}</AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}

export default {
  title: 'UI/Accordion',
  component: Accordion,
  parameters: {
    layout: 'padded',
    controls: { expanded: true },
  },
};

export const Basic = {
  render: () => <AccordionExample type="single" defaultValue="item-1" />,
};

export const CardStory = {
  render: () => (
    <Card className="mx-auto max-w-2xl">
      <CardHeader>
        <CardTitle className="text-base">Frequently Asked Questions</CardTitle>
      </CardHeader>
      <CardContent>
        <AccordionExample type="single" defaultValue="item-1" />
      </CardContent>
    </Card>
  ),
};

export const Bordered = {
  render: () => (
    <AccordionExample
      type="single"
      defaultValue="item-1"
      className="rounded-lg border px-4"
    />
  ),
};

export const Multiple = {
  render: () => (
    <AccordionExample
      type="multiple"
      defaultValue={['item-1', 'item-2']}
      className="rounded-lg border px-4"
    />
  ),
};
