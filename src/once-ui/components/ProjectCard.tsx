"use client";

import {AvatarGroup, Flex, Heading, RevealFx, SmartImage, SmartLink, Text} from "@/once-ui/components";
import {useEffect, useState} from "react";
import {TextContent} from "@/once-ui/types";

interface ProjectCardProps {
    images: string[];
    text: TextContent[];
}

export const ProjectCard: React.FC<ProjectCardProps> = ({
                                                            images = [],
                                                            text = [],
                                                        }) => {
    const [activeIndex, setActiveIndex] = useState(0);
    const [isTransitioning, setIsTransitioning] = useState(false);
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        // Get the user agent string
        const userAgent = navigator.userAgent.toLowerCase();
        setIsMobile(/mobile|android|iphone|ipad|ipod/.test(userAgent));
    }, []);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsTransitioning(true);
        }, 1000);

        return () => clearTimeout(timer);
    }, []);

    const handleImageClick = () => {
        if (images.length > 1) {
            setIsTransitioning(false);
            const nextIndex = (activeIndex + 1) % images.length;
            handleControlClick(nextIndex);

        }
    };

    const handleControlClick = (index: number) => {
        if (index !== activeIndex) {
            setIsTransitioning(false);
            setTimeout(() => {
                setActiveIndex(index);
                setIsTransitioning(true);
            }, 630);
        }
    };

    // @ts-ignore
    return (
        <Flex
            width={'s'}
            maxWidth={isMobile ? 'xs' : undefined}
            gap="m"
            direction="column">
            {images[activeIndex] && <Flex onClick={handleImageClick}>
                <RevealFx
                    style={{width: '100%'}}
                    delay={0.4}
                    trigger={isTransitioning}
                    speed="fast">
                    <SmartImage
                        tabIndex={0}
                        radius="l"
                        alt={text[activeIndex].title}
                        aspectRatio="16 / 9"
                        src={images[activeIndex]}
                        style={{
                            border: '1px solid var(--neutral-alpha-weak)',
                            ...(images.length > 1 && {
                                cursor: 'pointer',
                            }),
                        }}/>
                </RevealFx>
            </Flex>}
            {images.length > 1 && (
                <Flex
                    gap="4"
                    paddingX={isMobile ? undefined : 's'}
                    fillWidth
                    justifyContent="center">
                    {images.map((_, index) => (
                        <Flex
                            key={index}
                            onClick={() => handleControlClick(index)}
                            style={{
                                background: activeIndex === index
                                    ? 'var(--neutral-on-background-strong)'
                                    : 'var(--neutral-alpha-medium)',
                                cursor: 'pointer',
                                transition: 'background 0.3s ease',
                            }}
                            fillWidth
                            height="2">
                        </Flex>
                    ))}
                </Flex>
            )}
            <RevealFx
                style={{width: '100%'}}
                delay={0.4}
                trigger={isTransitioning}
                speed="fast">
                <Flex mobileDirection="column"
                      paddingX={isMobile ? undefined : 'xs'}
                      paddingTop="12"
                      paddingBottom="24">
                    {text[activeIndex].title && (
                        <Flex flex={5}>
                            <Heading
                                as="h2"
                                align={isMobile ? "center" : "left"}
                                paddingBottom={isMobile ? 'l' : undefined}
                                wrap="balance"
                                variant="heading-strong-xl">
                                {text[activeIndex].title}
                            </Heading>
                        </Flex>
                    )}
                    {text[activeIndex].summary && (
                        <Flex maxWidth={isMobile ? undefined : 'xs'} direction={'column'}>
                            <Text
                                as="span"
                                align={isMobile ? "center" : "right"}
                                variant="body-default-s"
                                onBackground="neutral-weak">
                                {text[activeIndex].summary}
                            </Text>
                            <Text
                                as="span"
                                align={isMobile ? "center" : "right"}
                                paddingTop={'s'}
                                variant={activeIndex == 1 ? "body-default-xs" : "body-default-s"}
                                onBackground="neutral-weak"
                                dangerouslySetInnerHTML={{ __html: text[activeIndex].footer }} />
                        </Flex>
                    )}
                </Flex>
            </RevealFx>
        </Flex>
    );
};
