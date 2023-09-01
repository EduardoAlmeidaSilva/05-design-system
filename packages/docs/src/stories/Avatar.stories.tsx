import type { StoryObj, Meta } from '@storybook/react'
import { Avatar, AvatarProps } from '@ignite-ui/react'

export default {
    title: 'Data display/Avatar',
    component: Avatar,
    args: {
        src: 'https://github.com/EduardoAlmeidaSilva.png',
        alt: 'Eduardo Ameida',
    },

    argTypes: {
        src: {
            control: {
                type: 'text',
            },
        },
    },

} as Meta<AvatarProps>

export const Primary: StoryObj<AvatarProps> = {}

export const WidthFallback: StoryObj<AvatarProps> = {
    args: {
        src: undefined,
    },
}
