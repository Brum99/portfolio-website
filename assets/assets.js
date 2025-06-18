import user_image from './my-img.jpg';
import code_icon from './code-icon.png';
import code_icon_dark from './code-icon-dark.png';
import edu_icon from './edu-icon.png';
import edu_icon_dark from './edu-icon-dark.png';
import project_icon from './project-icon.png';
import project_icon_dark from './project-icon-dark.png';
import vscode from './vscode.png';
import firebase from './firebase.png';
import figma from './figma.png';
import git from './git.png';
import mongodb from './mongodb.png';
import right_arrow_white from './right-arrow-white.png';
import logo from './logo.png';
import logo_dark from './logo_dark.png';
import mail_icon from './mail_icon.png';
import mail_icon_dark from './mail_icon_dark.png';
import profile_img from './my-img.jpg';
import download_icon from './download-icon.png';
import hand_icon from './hand-icon.png';
import header_bg_color from './header-bg-color.png';
import moon_icon from './moon_icon.png';
import sun_icon from './sun_icon.png';
import arrow_icon from './arrow-icon.png';
import arrow_icon_dark from './arrow-icon-dark.png';
import menu_black from './menu-black.png';
import menu_white from './menu-white.png';
import close_black from './close-black.png';
import close_white from './close-white.png';
import web_icon from './web-icon.png';
import mobile_icon from './mobile-icon.png';
import ui_icon from './ui-icon.png';
import graphics_icon from './graphics-icon.png';
import right_arrow from './right-arrow.png';
import send_icon from './send-icon.png';
import right_arrow_bold from './right-arrow-bold.png';
import right_arrow_bold_dark from './right-arrow-bold-dark.png';
import bot_icon from './agent.png';
import ML_icon from './ML.png';
import data_icon from './data-science.png';
import web_app_icon from './app-development.png';

import sqlite_icon from './sqlite.svg';
import jupyter_icon from './jupyter.svg';
import scikitlearn_icon from './scikitlearn.svg';
import git_icon from './git.svg';
import tensorflow_icon from './tensorflow.svg';

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
        slug: 'MRI-brain-tumor-clasification',
        title: 'MRI Brain Tumor Clasification',
        description: 'Machine Learning',
        bgImage: '/work-1-MRI.png',
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
    { icon: assets.edu_icon, iconDark: assets.edu_icon_dark, title: 'Education', description: 'B.Sci Applied Science M.S. Data Science' },
    { icon: assets.project_icon, iconDark: assets.project_icon_dark, title: 'Projects', description: 'Built more than 5 projects' }
];

export const toolsData = [
    assets.scikitlearn_icon, assets.sqlite_icon, assets.jupyter_icon, assets.tensorflow_icon, assets.git_icon
];


