import user_image from './images/profileImage.jpg';
import code_icon from './images/code-icon.png';
import code_icon_dark from './images/code-icon-dark.png';
import edu_icon from './images/edu-icon.png';
import edu_icon_dark from './images/edu-icon-dark.png';
import project_icon from './images/project-icon.png';
import project_icon_dark from './images/project-icon-dark.png';
import vscode from './images/vscode.png';
import firebase from './images/firebase.png';
import figma from './images/figma.png';
import git from './images/git.png';
import mongodb from './images/mongodb.png';
import right_arrow_white from './images/right-arrow-white.png';
import logo from './images/logo.png';
import logo_dark from './images/logo_dark.png';
import mail_icon from './images/mail_icon.png';
import mail_icon_dark from './images/mail_icon_dark.png';
import profile_img from './images/my-img.jpg';
import download_icon from './images/download-icon.png';
import hand_icon from './images/hand-icon.png';
import header_bg_color from './images/header-bg-color.png';
import moon_icon from './images/moon_icon.png';
import sun_icon from './images/sun_icon.png';
import arrow_icon from './images/arrow-icon.png';
import arrow_icon_dark from './images/arrow-icon-dark.png';
import menu_black from './images/menu-black.png';
import menu_white from './images/menu-white.png';
import close_black from './images/close-black.png';
import close_white from './images/close-white.png';
import web_icon from './images/web-icon.png';
import mobile_icon from './images/mobile-icon.png';
import ui_icon from './images/ui-icon.png';
import graphics_icon from './images/graphics-icon.png';
import right_arrow from './images/right-arrow.png';
import send_icon from './images/send-icon.png';
import right_arrow_bold from './images/right-arrow-bold.png';
import right_arrow_bold_dark from './images/right-arrow-bold-dark.png';
import bot_icon from './images/agent.png';
import ML_icon from './images/ML.png';
import data_icon from './images/data-science.png';
import web_app_icon from './images/app-development.png';

import sqlite_icon from './images/sqlite.svg';
import jupyter_icon from './images/jupyter.svg';
import scikitlearn_icon from './images/scikitlearn.svg';
import git_icon from './images/git.svg';
import tensorflow_icon from './images/tensorflow.svg';


export const assets = {
    user_image,
    code_icon,
    code_icon_dark,
    edu_icon,
    edu_icon_dark,
    project_icon,
    project_icon_dark,
    vscode,
    firebase,
    figma,
    git,
    mongodb,
    right_arrow_white,
    logo,
    logo_dark,
    mail_icon,
    mail_icon_dark,
    profile_img,
    download_icon,
    hand_icon,
    header_bg_color,
    moon_icon,
    sun_icon,
    arrow_icon,
    arrow_icon_dark,
    menu_black,
    menu_white,
    close_black,
    close_white,
    web_icon,
    mobile_icon,
    ui_icon,
    graphics_icon,
    right_arrow,
    send_icon,
    right_arrow_bold,
    right_arrow_bold_dark,
    ML_icon,
    data_icon,
    web_app_icon,
    bot_icon,
    sqlite_icon,
    jupyter_icon,
    scikitlearn_icon,
    git_icon,
    tensorflow_icon
};

export const workData = [
    {
        slug: 'mri-classification',
        title: 'MRI Classification Using CNNs',
        description: 'Machine Learning',
        bgImage: '/projectImages/mri-CNN/work-1-MRI.png',
        headerImage: '/projectImages/mri-CNN/header_mri_banner.png',
        contentPath: 'mri-classification.mdx', 
        tags: ['TensorFlow', 'Medical Imaging', 'Python'],
    },
    {
        slug: 'geo-based-app',
        title: 'Geo based app',
        description: 'Mobile App',
        bgImage: '/work-2.png',
    },
    {
        slug: 'photography-site',
        title: 'Photography site',
        description: 'Web Design',
        bgImage: '/work-3.png',
    },
    {
        slug: 'ui-ux-designing',
        title: 'UI/UX designing',
        description: 'UI/UX Design',
        bgImage: '/work-4.png',
    },
]

export const serviceData = [
    { icon: assets.ML_icon, title: 'ML/AI', description: 'I build intelligent systems using deep learning, computer vision, and large language models. Projects include a 3D-CNN surgical skill classifier and fine-tuning LLMs.', link: '' },
    { icon: assets.data_icon, title: 'Data Science', description: 'I apply statistics and machine learning to uncover insights and power real-world decisions.', link: '' },
    { icon: assets.web_app_icon, title: 'Web App Development', description: 'I develop responsive, interactive web applications using Flask, Next.js, and Mapbox.', link: '' },
    { icon: assets.bot_icon, title: 'Agent Programming', description: 'I specialize in designing multi-agent systems and autonomous behaviors.', link: '' },
]

export const infoList = [
    { icon: assets.code_icon, iconDark: assets.code_icon_dark, title: 'Languages', description: 'Pyton, HTML, CSS, JavaScript, React Js, Next Js, SQL' },
    { icon: assets.edu_icon, iconDark: assets.edu_icon_dark, title: 'Education', description: 'B.Sci Applied Science M.Sc Data Science' },
    { icon: assets.project_icon, iconDark: assets.project_icon_dark, title: 'Projects', description: 'Built more than 5 projects' }
];

export const toolsData = [
    assets.scikitlearn_icon, assets.sqlite_icon, assets.jupyter_icon, assets.tensorflow_icon, assets.git_icon
];


