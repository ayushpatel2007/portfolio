import { useEffect, useRef } from 'react';
import { useScene } from '../context/SceneContext';

const ROOM_META = {
    null: {
        path: '/',
        title: 'Ayush Patel | Automation & Robotics Portfolio',
        description: 'Interactive 3D portfolio of Ayush Patel - Automation & Robotics Engineering Student at Parul University.',
    },
    about: {
        path: '/about',
        title: 'About Me | Ayush Patel Portfolio',
        description: 'Learn about Ayush Patel — Automation & Robotics Engineering Student at Parul University, Vadodara, Gujarat.',
    },
    gallery: {
        path: '/gallery',
        title: 'Projects & Systems | Ayush Patel Portfolio',
        description: 'Explore personal software projects, real-time push-to-talk apps, and physical robotics builds by Ayush Patel.',
    },
    studio: {
        path: '/studio',
        title: 'Showcase Studio | Ayush Patel Portfolio',
        description: 'Interactive showcase of Ayush Patel\'s personal projects, hackathon platforms, and robotics systems.',
    },
    contact: {
        path: '/contact',
        title: 'Contact | Ayush Patel Portfolio',
        description: 'Get in touch with Ayush Patel. Find email, GitHub, LinkedIn, and resume download links.',
    },
};

const PATH_TO_ROOM = {
    '/': null,
    '/about': 'about',
    '/gallery': 'gallery',
    '/studio': 'studio',
    '/contact': 'contact',
};

export function getInitialRoomFromUrl() {
    const path = window.location.pathname.replace(/\/+$/, '') || '/';
    return PATH_TO_ROOM[path] !== undefined ? PATH_TO_ROOM[path] : null;
}

export function useDocumentMeta() {
    const { currentRoom, teleportTo, hasEntered } = useScene();
    const isHandlingPopState = useRef(false);
    const lastPushedRoom = useRef(undefined);

    useEffect(() => {
        const roomKey = currentRoom === null ? 'null' : currentRoom;
        const meta = ROOM_META[roomKey] || ROOM_META['null'];

        document.title = meta.title;

        const descTag = document.querySelector('meta[name="description"]');
        if (descTag) {
            descTag.setAttribute('content', meta.description);
        }

        const ogTitle = document.querySelector('meta[property="og:title"]');
        if (ogTitle) ogTitle.setAttribute('content', meta.title);

        const ogDesc = document.querySelector('meta[property="og:description"]');
        if (ogDesc) ogDesc.setAttribute('content', meta.description);

        if (!isHandlingPopState.current && lastPushedRoom.current !== currentRoom) {
            if (lastPushedRoom.current === undefined) {
                window.history.replaceState({ room: currentRoom }, '', meta.path);
            } else {
                window.history.pushState({ room: currentRoom }, '', meta.path);
            }
            lastPushedRoom.current = currentRoom;
        }

        isHandlingPopState.current = false;
    }, [currentRoom]);

    useEffect(() => {
        const handlePopState = (event) => {
            isHandlingPopState.current = true;
            const targetRoom = event.state?.room ?? null;
            lastPushedRoom.current = targetRoom;

            if (targetRoom === null) {
                const meta = ROOM_META['null'];
                document.title = meta.title;
            } else if (hasEntered) {
                teleportTo(targetRoom);
            }
        };

        window.addEventListener('popstate', handlePopState);
        return () => window.removeEventListener('popstate', handlePopState);
    }, [teleportTo, hasEntered]);
}
