import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0';
import styled from 'styled-components';
import DownloadIcon from '../../icons/Download';
import Button from '.';
import { ButtonProps } from './types/button.type';

export default {
  title: 'Components/Button',
  component: Button,
} as Meta;

const Template: Story<ButtonProps> = (args) => <Button {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: 'Default Button',
  type: 'default',
  round: true
}


export const OutlineOne = Template.bind({});
OutlineOne.args = {
  children: 'Outline one Button',
  type: 'outlineOne',
  round: true
};

export const Success = Template.bind({});
Success.args = {
  children: 'Success Button',
  type: 'success',
  round: true
};

export const Danger = Template.bind({});
Danger.args = {
  children: 'Danger Button',
  type: 'danger',
  round: true
};

export const Disabled = Template.bind({});
Disabled.args = {
  children: 'Disabled Button',
  disabled: true,
  round: true
};

export const Loading = Template.bind({});
Loading.args = {
  children: 'Button',
  loading: true,
  round: true
};

export const WithIcon = Template.bind({});
WithIcon.args = {
  icon: DownloadIcon,
  children: 'Download',
  round: true
};

const ButtonRow = styled.div`
  display: flex;
  align-items: flex-start;
  margin-bottom: 10px;
  & > * {
    margin-right: 10px;
  }
`;

export const Sizes = () => {
  return (
    <>
      <ButtonRow>
        <Button size='large'>Large</Button>
        <Button size='default'>Default</Button>
        <Button size='small'>Small</Button>
      </ButtonRow>
      <ButtonRow>
        <Button type='success' size='large'>Large</Button>
        <Button type='success' size='default'>Default</Button>
        <Button type='success' size='small'>Small</Button>
      </ButtonRow>
      <ButtonRow>
        <Button type='danger' size='large'>Large</Button>
        <Button type='danger' size='default'>Default</Button>
        <Button type='danger' size='small'>Small</Button>
      </ButtonRow>
      <ButtonRow>
        <Button type='outlineOne' size='large'>Large</Button>
        <Button type='outlineOne' size='default'>Default</Button>
        <Button type='outlineOne' size='small'>Small</Button>
      </ButtonRow>
      <ButtonRow>
        <Button loading disabled size='large'>Large</Button>
        <Button loading disabled size='default'>Default</Button>
        <Button loading disabled size='small'>Small</Button>
      </ButtonRow>
    </>
  );
};