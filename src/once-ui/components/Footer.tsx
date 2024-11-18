import { Flex, IconButton, Text } from "@/once-ui/components"
import styles from './Footer.module.scss'
import React from "react";

export const Footer = () => {
    const currentYear = new Date().getFullYear();

    const footer = {
        title: `The Būtler`,
        description: `Built to help moms by dads.`,
        headline: <>The Būtler</>,
        subline: <>Built to help Moms by Dads.</>
    }

    const social = [
        // Links are automatically displayed.
        // Import new icons in /once-ui/icons.ts
        {
            name: 'Apple',
            icon: 'apple',
            link: 'https://www.apple.com/app-store/',
        },
        {
            name: 'Email',
            icon: 'email',
            link: 'mailto:support@thebutlerapp.com',
        },
    ]

    return (
        <Flex
            as="footer"
            position="relative"
            fillWidth paddingX="2" paddingBottom='l'
            justifyContent="center" mobileDirection="column">
            <Flex
                className={styles.mobile}
                fillWidth maxWidth="m" paddingTop="56" paddingX="16" gap="16"
                justifyContent="space-between" alignItems="center">
                <Text
                    variant="body-default-s"
                    onBackground="neutral-strong">
                    <Text
                        onBackground="neutral-weak">
                        © {currentYear} /
                    </Text>
                    <Text paddingX="4">
                        {footer.title}
                    </Text>
                </Text>
                <Flex
                    gap="16">
                    {social.map((item) => (
                        item.link && (
                            <IconButton
                                key={item.name}
                                href={item.link}
                                icon={item.icon}
                                tooltip={item.name}
                                size="s"
                                variant="ghost"/>
                        )
                    ))}
                </Flex>
            </Flex>
        </Flex>
    )
}