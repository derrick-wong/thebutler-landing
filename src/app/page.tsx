"use client";

import React, {useEffect, useState} from 'react';

import {
    Heading,
    Text,
    Flex,
    RevealFx
} from '@/once-ui/components';
import Image from "next/image";
import {ProjectCard} from "@/once-ui/components/ProjectCard";
import {Footer} from "@/once-ui/components/Footer";
import Link from "next/link";

export default function Home() {
    const content = {
        slug: 'content',
        texts: [{
            title: "Life as a busy parent, caregiver, or partner often means juggling countless responsibilities.",
            publishedAt: "2024-11-17",
            summary: "The Būtler was created by parents, for parents, to make asking for help effortless—because sometimes, all you have is one free hand.",
            footer: "Let us help, it's free!"
        }, {
            title: "The Būtler transforms moments of stress into opportunities for teamwork and support.",
            publishedAt: "2024-11-17",
            summary: "This app was born from real-life moments: a mom cradling a baby while multi-tasking and needing help—fast.",
            footer: "&emsp;•&emsp;One-Click Requests: Effortlessly send requests with a tap.<br />" +
                "&emsp;•&emsp;Collaborative: Add tasks to anyone in your group.<br />" +
                "&emsp;•&emsp;Instant Push Notifications: Keep everyone in the loop.<br />" +
                "&emsp;•&emsp;Dedicated Butler Screen: A clear view of all tasks waiting to be fulfilled.",
        }, {
            title: "With The Būtler, you can send task requests to your group with just one click.",
            publishedAt: "2024-11-17",
            summary: "Whether it’s asking your partner to grab a diaper, reminding family to pick up groceries, or organizing help from friends, everyone in your group stays in sync.",
            footer: "Push notifications ensure no task goes unnoticed, and the “Butlers” (task fulfillers) can easily view and manage pending tasks to lend a hand.",
        }, {
            title: "Empower your group to share the load and tackle life’s tasks together.",
            publishedAt: "2024-11-17",
            summary: "Whether you’re a parent, partner, or part of a supportive circle, The Būtler is here to help you make life a little easier—one task at a time.",
            footer: "",
        }, ],
        images: [
            "/images/butler/butler-1.png",
            "/images/butler/butler-3.png",
            "/images/butler/butler-4.png",
            "/images/butler/butler-2.png"
        ]
    };

    const logoImage = '/images/butler/logo.png';
    const appStoreBadgeImage = '/images/butler/appstore_badge.svg';
    const playStoreBadgeImage = '/images/butler/playstore.png';

    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        // Get the user agent string
        const userAgent = navigator.userAgent.toLowerCase();
        setIsMobile(/mobile|android|iphone|ipad|ipod/.test(userAgent));
    }, []);

    const home = {
        label: 'Home',
        title: `The Būtler`,
        description: `Your Family’s Personal Assistant for Everyday Tasks`,
        headline: <>The Būtler</>,
        subline: <>Your Family’s Personal Assistant</>,
        subline2: <>for Everyday Tasks</>
    }

    return (
        <Flex fillWidth
              direction="column"
              justifyContent="center"
              alignItems="center">
            {isMobile ?
                (<Flex direction="column" paddingTop='xl'>
                    <RevealFx translateY="8" delay={0.2}>
                        <Image src={logoImage} alt="logo" width={200} height={200}/>
                    </RevealFx>
                </Flex>) : (<></>)
            }
            <Flex minWidth={isMobile ? undefined : "s"}>
                {isMobile ? (<></>) :
                    (<Flex direction="column">
                        <RevealFx translateY="8" delay={0.2}>
                            <Image src={logoImage} alt="logo" width={300} height={300}/>
                        </RevealFx>
                    </Flex>)
                }
                <Flex direction="column"
                      fillWidth
                      paddingBottom={isMobile ? 'xl' : undefined}
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
                                align="center"
                                wrap="balance"
                                onBackground="neutral-weak"
                                variant="heading-default-xl"
                            >
                                {home.subline}
                                <br/>
                                {home.subline2}
                            </Text>
                        </Flex>
                    </RevealFx>
                    <RevealFx translateY="8" delay={0.2}>
                        <Flex direction="row"
                              justifyContent="center"
                              alignItems="center">
                            <Link href={'https://apps.apple.com/us/app/the-b%C5%ABtler/id6738318131'}
                                  target="_blank"
                                  rel="noopener noreferrer">
                                <Image
                                    src={appStoreBadgeImage}
                                    alt="Apple App Store"
                                    width={150}
                                    height={70}
                                    style={{paddingRight: 10}}
                                />
                            </Link>
                            {/*<Image*/}
                            {/*    src={playStoreBadgeImage}*/}
                            {/*    alt="Google Play Store"*/}
                            {/*    width={150}*/}
                            {/*    height={50}*/}
                            {/*/>*/}
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
                        text={content.texts}/>
                </Flex>
            </RevealFx>
            <Footer/>
        </Flex>
    );
}
