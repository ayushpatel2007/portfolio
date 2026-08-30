export const PLATFORM_CONFIG = {
    youtube: {
        color: '#FF0000',
        accentColor: '#cc0000',
        icon: '💻',
        label: 'Software Systems',
        shape: 'tv',
    },
    blog: {
        color: '#4A90D9',
        accentColor: '#2d6cb5',
        icon: '🏆',
        label: 'Experience & Contests',
        shape: 'monitor',
    },
    tiktok: {
        color: '#00F2EA',
        accentColor: '#FF0050',
        icon: '🤖',
        label: 'Robotics Builds',
        shape: 'phone',
    },
    linkedin: {
        color: '#0077B5',
        accentColor: '#005E93',
        icon: 'in',
        label: 'LinkedIn',
        shape: 'monitor',
    }
};

const RAW_CONTENT_DATA = [
    // ============ ROBOTICS BUILDS ============
    {
        id: 'rob-001',
        platform: 'tiktok',
        title: 'AI Autonomous Driving Robot',
        description: 'Raspberry Pi 5 integration with sensors like LiDAR, SIM800L, and GPS. Built using OpenCV with Python GUI for coding and Google AI Studio for LiDAR distance mapping and bot telemetry.',
        frontTexture: '/textures/studio/phonefront_followmeontiktok.webp',
        paintedFrontTexture: '/textures/studio/phonefront_followmeontiktok_painted.webp',
        url: 'https://github.com/ayushpatel2007',
        views: 'Raspberry Pi 5',
        likes: 'Hardware',
    },
    {
        id: 'rob-002',
        platform: 'tiktok',
        title: 'Hand Gesture Controlled Robot Car',
        description: 'Surveillance robot car for hazardous places. Uses Arduino UNO R3, MPU6050, HC-12 wireless module, L298N drivers, and ESP32-CAM for live IP-based camera streaming.',
        frontTexture: '/textures/studio/phonefront_followmeontiktok.webp',
        paintedFrontTexture: '/textures/studio/phonefront_followmeontiktok_painted.webp',
        url: 'https://github.com/ayushpatel2007',
        views: 'Arduino / ESP32',
        likes: 'Surveillance',
    },
    {
        id: 'rob-003',
        platform: 'tiktok',
        title: 'Mapping Robot Car',
        description: 'Autonomous mapping robot using ESP32, LiDAR, MPU6050, and HC-SR04 sensors. Detects walls, measures room boundaries, and streams live 2D mapping data to an HTML interface.',
        frontTexture: '/textures/studio/phonefront_followmeontiktok.webp',
        paintedFrontTexture: '/textures/studio/phonefront_followmeontiktok_painted.webp',
        url: 'https://github.com/ayushpatel2007',
        views: 'LiDAR SLAM',
        likes: 'Autonomous',
    },
    {
        id: 'rob-004',
        platform: 'tiktok',
        title: 'Stretch Wrapping Robot',
        description: 'Industrial stretch wrapping robot built with Arduino UNO R3, NEMA-17 Steppers, CNC Shield, A4988 drivers, 4040 aluminum extrusion, 2020 V-Wheel gantry plate, and SMPS power distribution.',
        frontTexture: '/textures/studio/phonefront_followmeontiktok.webp',
        paintedFrontTexture: '/textures/studio/phonefront_followmeontiktok_painted.webp',
        url: 'https://github.com/ayushpatel2007',
        views: 'CNC / Hardware',
        likes: 'Automation',
    },

    // ============ SOFTWARE SYSTEMS ============
    {
        id: 'proj-001',
        platform: 'youtube',
        title: 'Passenger Attendance System',
        description: 'Passenger attendance system built using Python, HTML, JS, and Google Sheets API. Passengers scan static QR codes in buses to automatically update live Google Sheets records.',
        frontTexture: '/textures/studio/tvfront_filmikprojektdlamultiego.webp',
        paintedFrontTexture: '/textures/studio/tvfront_filmikprojektdlamultiego_painted.webp',
        url: 'https://github.com/ayushpatel2007/bus-track-system',
        views: 'Python / Flask',
        duration: 'Fleet Tracking',
    },
    {
        id: 'proj-002',
        platform: 'youtube',
        title: 'FinNexa AI Advisory Platform',
        description: 'Intelligent financial advisory platform using Next.js, React, Supabase, and OpenRouter API key. Features instant AI document analysis, SIP projections, EMI calculations, and chat history.',
        frontTexture: '/textures/studio/tvfront_filmikedytowaniezdjec.webp',
        paintedFrontTexture: '/textures/studio/tvfront_filmikedytowaniezdjec_painted.webp',
        url: 'https://github.com/ayushpatel2007/FinNexa-AI',
        views: 'Next.js / AI',
        duration: 'Financial Tech',
    },
    {
        id: 'proj-003',
        platform: 'youtube',
        title: 'GitProfile Studio',
        description: 'Next.js application generating polished GitHub profile README files from public usernames. Features profile analysis, template customization, markdown editor, and live preview.',
        frontTexture: '/textures/studio/tvfront_filmikedytowaniezdjec.webp',
        paintedFrontTexture: '/textures/studio/tvfront_filmikedytowaniezdjec_painted.webp',
        url: 'https://github.com/ayushpatel2007/gitprofile-studio',
        views: 'Next.js / React',
        duration: 'Developer Tool',
    },
    {
        id: 'proj-004',
        platform: 'youtube',
        title: 'Group Walkie Voice Platform',
        description: 'Browser-based real-time push-to-talk voice communication app using WebRTC and Socket.IO. Features private password-protected channels, emergency SOS alerts, and live participant lists.',
        frontTexture: '/textures/studio/tvfront_filmikprojektdlamultiego.webp',
        paintedFrontTexture: '/textures/studio/tvfront_filmikprojektdlamultiego_painted.webp',
        url: 'https://github.com/ayushpatel2007/group-walkie',
        views: 'WebRTC / Node',
        duration: 'Voice WebApp',
    },

    // ============ PROFESSIONAL EXPERIENCE & EVENTS ============
    {
        id: 'exp-001',
        platform: 'blog',
        title: 'Intern — Bhathwari Technologies Pvt Ltd',
        description: 'Gained practical exposure to industrial tools, machinery, and technical processes (Ahmedabad, Gujarat). Assisted in workshop activities, operational tasks, and real-world safety standards.',
        frontTexture: '/textures/studio/monitorfront_postnafbdoublewinner.webp',
        paintedFrontTexture: '/textures/studio/monitorfront_postnafbdoublewinner_painted.webp',
        url: 'https://www.linkedin.com/in/ayushpatel2037/',
        readTime: 'Ahmedabad, Gujarat',
    },
    {
        id: 'exp-002',
        platform: 'blog',
        title: 'Operations Intern — Parul University Transport Dept',
        description: 'Handled transport registration, logistics coordination, Excel data entry, maintenance of transport records, and route scheduling with students and staff (Vadodara, Gujarat).',
        frontTexture: '/textures/studio/monitorfront_postnafbdoublewinner.webp',
        paintedFrontTexture: '/textures/studio/monitorfront_postnafbdoublewinner_painted.webp',
        url: 'https://www.linkedin.com/in/ayushpatel2037/',
        readTime: 'Vadodara, Gujarat',
    },
    {
        id: 'exp-003',
        platform: 'blog',
        title: 'Event Coordinator & Lead — Parul University',
        description: 'Completed 25+ events as a student coordinator in different committees (Parul University). Led 3 major technical events: Odoo Hackathon 2026, TechExpo 2026, and PU Code Hackathon 3.0.',
        frontTexture: '/textures/studio/monitorfront_postnafbdoublewinner.webp',
        paintedFrontTexture: '/textures/studio/monitorfront_postnafbdoublewinner_painted.webp',
        url: 'https://www.linkedin.com/in/ayushpatel2037/',
        readTime: '25+ Events Led',
    }
];

const ytTextures = ['/textures/studio/tvfront_filmikprojektdlamultiego.webp', '/textures/studio/tvfront_filmikedytowaniezdjec.webp'];
const ytPaintedTextures = ['/textures/studio/tvfront_filmikprojektdlamultiego_painted.webp', '/textures/studio/tvfront_filmikedytowaniezdjec_painted.webp'];
const blogTextures = ['/textures/studio/monitorfront_postnafbdoublewinner.webp'];
const blogPaintedTextures = ['/textures/studio/monitorfront_postnafbdoublewinner_painted.webp'];
const ttTextures = ['/textures/studio/phonefront_followmeontiktok.webp'];
const ttPaintedTextures = ['/textures/studio/phonefront_followmeontiktok_painted.webp'];

let ytIdx = 0, blogIdx = 0, ttIdx = 0;
let ytPIdx = 0, blogPIdx = 0, ttPIdx = 0;

export const CONTENT_DATA = RAW_CONTENT_DATA.map((item) => {
    return {
        ...item,
        frontTexture: item.frontTexture || (
            item.platform === 'youtube' ? ytTextures[ytIdx++ % ytTextures.length] :
                item.platform === 'blog' ? blogTextures[blogIdx++ % blogTextures.length] :
                    ttTextures[ttIdx++ % ttTextures.length]
        ),
        paintedFrontTexture: item.paintedFrontTexture || (
            item.platform === 'youtube' ? ytPaintedTextures[ytPIdx++ % ytPaintedTextures.length] :
                item.platform === 'blog' ? blogPaintedTextures[blogPIdx++ % blogPaintedTextures.length] :
                    ttPaintedTextures[ttPIdx++ % ttPaintedTextures.length]
        )
    };
});

export const getContentByPlatform = (platform) => {
    if (platform === 'all') return CONTENT_DATA;
    return CONTENT_DATA.filter(item => item.platform === platform);
};

export const getLatestContent = () => {
    return CONTENT_DATA[0];
};
