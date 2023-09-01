import type { StoryObj, Meta } from '@storybook/react'
import { Text, TextProps } from '@ignite-ui/react'

export default {
    title: 'Typography/Text',
    component: Text,

    args: {
        size: 'md',
        children: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum, tempore rem! Assumenda libero ea molestias qui vero, eaque quia officia! Aperiam expedita aliquid nostrum maiores quo ad provident ullam quos?'
    },

    argTypes: {
        size: {
            options: ['xxs', 'xs', 'sm', 'md', 'lg', 'xl', '2xl', '5xl', '6xl', '7xl', '8xl', '9xl'],
            control: {
                type: 'inline-radio',
            },
        },
    }

} as Meta<TextProps>

export const Primary: StoryObj<TextProps> = {}

export const CustomTag: StoryObj<TextProps> = {
    args: {
        children: 'Strong text',
        as: 'strong',
    }
}