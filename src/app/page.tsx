"use client";

import React from 'react';

import {
    Heading,
    Text,
    Flex,
    RevealFx
} from '@/once-ui/components';
import Image from "next/image";
import {ProjectCard} from "@/once-ui/components/ProjectCard";
import {Footer} from "@/once-ui/components/Footer";

export default function Home() {
    const content = {
        slug: 'content',
        title: "One-click task manager for Moms to easily send requests to partners.",
        publishedAt: "2024-11-17",
        summary: "Moms often are holding their little one in one arm and juggling a task in another.",
        footer: "Let us help, it's free!",
        images: [
            "/images/butler/butler-1.png",
            "/images/butler/butler-3.png",
            "/images/butler/butler-2.png"
        ]
    };

    const logoImage = '/images/avatar.png';
    const appStoreBadgeImage = '/images/butler/appstore_badge.svg';
    const playStoreBadgeImage = '/images/butler/playstore-soon.png';

    const home = {
        label: 'Home',
        title: `The Būtler`,
        description: `Built to help moms by dads.`,
        headline: <>The Būtler</>,
        subline: <>Built to help Moms by Dads.</>
    }

    return (
        <Flex fillWidth
              direction="column"
              justifyContent="center"
              alignItems="center">
            <Flex minWidth="s" >
                <Flex direction="column">
                    <RevealFx translateY="8" delay={0.2}>
                        <Image src={logoImage} alt="logo" width={300} height={300}/>
                    </RevealFx>
                </Flex>
                <Flex direction="column"
                      fillWidth
                      justifyContent="center"
                      alignItems="center">
                    <RevealFx translateY="4">
                        <Heading wrap="balance" variant="display-strong-l" align={'center'}>
                            {home.headline}
                        </Heading>
                    </RevealFx>
                    <RevealFx translateY="8" delay={0.2}>
                        <Flex fillWidth justifyContent="center"
                              alignItems="center">
                            <Text
                                wrap="balance"
                                onBackground="neutral-weak"
                                variant="heading-default-xl"
                            >
                                {home.subline}
                            </Text>
                        </Flex>
                        <Flex direction="row" justifyContent="center"
                              alignItems="center">
                            <Image
                                src={appStoreBadgeImage}
                                alt="app store badge"
                                width={150}
                                height={70}
                                style={{paddingRight: 10}}
                            />
                            <Image
                                src={playStoreBadgeImage}
                                alt="play store badge"
                                width={150}
                                height={50}
                            />
                        </Flex>
                    </RevealFx>
                </Flex>
            </Flex>
            <RevealFx translateY="16" delay={0.6}>
                <Flex fillWidth
                      justifyContent="center"
                      alignItems="center">
                    <ProjectCard
                        key={content.slug}
                        images={content.images}
                        title={content.title}
                        description={content.summary}
                        footer={content.footer}/>
                </Flex>
            </RevealFx>
            <Footer/>
        </Flex>
    );
}
