"use client";

import {AvatarGroup, Flex, Heading, RevealFx, SmartImage, SmartLink, Text} from "@/once-ui/components";
import {useEffect, useState} from "react";

interface ProjectCardProps {
    images: string[];
    title: string;
    description: string;
    footer?: string;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({
                                                            images = [],
                                                            title,
                                                            description,
                                                            footer,
                                                        }) => {
    const [activeIndex, setActiveIndex] = useState(0);
    const [isTransitioning, setIsTransitioning] = useState(false);
    const isMobile = /Mobi/i.test(window?.navigator.userAgent);

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
                        alt={title}
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
            <Flex mobileDirection="column"
                  paddingX={isMobile ? undefined : 'xs'}
                  paddingTop="12"
                  paddingBottom="24">
                {title && (
                    <Flex flex={5}>
                        <Heading
                            as="h2"
                            align={isMobile ? "center" : "left"}
                            paddingBottom={isMobile ? 'l' : undefined}
                            wrap="balance"
                            variant="heading-strong-xl">
                            {title}
                        </Heading>
                    </Flex>
                )}
                { description && (
                    <Flex maxWidth={isMobile ? undefined : 'xs'} direction={'column'}>
                        <Text
                            as="span"
                            align={isMobile ? "center" : "right"}
                            variant="body-default-s"
                            onBackground="neutral-weak">
                            {description}
                        </Text>
                        <Text
                            as="span"
                            align={isMobile ? "center" : "right"}
                            paddingTop={'s'}
                            variant="body-default-s"
                            onBackground="neutral-weak">
                            {footer}
                        </Text>
                    </Flex>
                )}
            </Flex>
        </Flex>
    );
};
