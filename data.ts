import { IconType } from "react-icons";
import { MdWeb, MdGTranslate } from 'react-icons/md';
import { AiOutlineDatabase, AiFillCode } from 'react-icons/ai'
import { CgIfDesign } from 'react-icons/cg'
import { FiType,FiFramer } from 'react-icons/fi'
import { IoCubeOutline,IoLogoCss3,IoLogoNodejs,IoLogoPython } from 'react-icons/io5'
import {SiJavascript,SiTailwindcss,SiTypescript,SiMatrix,SiReact,SiAdobeillustrator,SiAdobephotoshop,SiFigma,SiMicrosoftoffice,
    SiNextdotjs,SiChakraui,SiBootstrap,SiMaterialui,SiFirebase,SiMongodb} from 'react-icons/si'
import {TiHtml5} from 'react-icons/ti'


export interface Idata {
    title: string;
    about: string;
    icon: IconType;
}

export interface Ibar {
    name: string;
    level: string;
    type: string;
    Icon: IconType;
}

export const data: Idata[] = [
    {
        title: 'Front-end Dev',
        about: '    I build beautiful websites and web applications using <b> HTML </b>, <b> CSS </b>, <b> JavaScript </b>, <b> React js</b>.',
        icon: MdWeb
    },
    {
        title: 'Back-end Dev',
        about: '    I handle database, server and api using <b> Node js </b>, <b> Next js </b> ,<b> Mongo db </b>, <b> Fire base</b>. ',
        icon: AiOutlineDatabase
    },
    {
        title: 'UI&UX Designer',
        about: '    Aware of Ux rules and use them to make the user experience more comfortable. ',
        icon: CgIfDesign
    },
    {
        title: 'Problem solver',
        about: '    I write functions to solve specific proplems from scratch. ',
        icon: AiFillCode
    },
    {
        title: 'Solid Designer ',
        about: '    I can create solid designs and assemblies using <b> Solid Works </b>.',
        icon: IoCubeOutline
    },
    {
        title: 'Typist',
        about: '    I write content, reports and official documents. I am familiar with <b> Word </b> , <b> Exel </b> and  <b>Powerpoint</b>. ',
        icon: FiType
    },
    {
        title: 'Translator',
        about: '    I am fluent at both Arabic and English, I can translate any piece of work to any of those langauges.',
        icon: MdGTranslate
    },
]


export const bar: Ibar[] = [
    {
        name: 'JavaScript',
        level: '96',
        type: 'PL',
        Icon: SiJavascript,
    },
    {
        name: 'HTML5',
        level: '95',
        type: 'PL',
        Icon: TiHtml5,
    },
    {
        name: 'CSS',
        level: '90',
        type: 'PL',
        Icon: IoLogoCss3,
    },
    {
        name: 'Node js',
        level: '75',
        type: 'PL',
        Icon: IoLogoNodejs,
    },
    {
        name: 'TypeScript',
        level: '60',
        type: 'PL',
        Icon: SiTypescript,
    },
    {
        name: 'Python',
        level: '50',
        type: 'PL',
        Icon: IoLogoPython,
    },
    {
        name: 'Matlab',
        level: '20',
        type: 'PL',
        Icon: SiMatrix,
    },
    {
        name: 'React',
        level: '90',
        type: 'FW',
        Icon: SiReact,
    },
    {
        name: 'Next',
        level: '85',
        type: 'FW',
        Icon: SiNextdotjs,
    },
    {
        name: 'Tailwind css',
        level: '95',
        type: 'L',
        Icon: SiTailwindcss,
    },
    {
        name: 'Chakra UI',
        level: '90',
        type: 'L',
        Icon: SiChakraui,
    },
    {
        name: 'Bootstrap',
        level: '90',
        type: 'L',
        Icon: SiBootstrap,
    },
    {
        name: 'Framer M',
        level: '80',
        type: 'L',
        Icon: FiFramer,
    },
    {
        name: 'Materialui',
        level: '80',
        type: 'L',
        Icon: SiMaterialui,
    },
    {
        name: 'Firebase',
        level: '90',
        type: 'DB',
        Icon: SiFirebase,
    },
    {
        name: 'Mongo db',
        level: '70',
        type: 'DB',
        Icon: SiMongodb,
    },{
        name: 'Illustrator',
        level: '80',
        type: 'T',
        Icon: SiAdobeillustrator,
    },{
        name: 'Photoshop',
        level:'50',
        type: 'T',
        Icon: SiAdobephotoshop,
    },{
        name: 'Figma',
        level: '50',
        type: 'T',
        Icon: SiFigma,
    },{
        name: 'MO',
        level: '50',
        type: 'T',
        Icon: SiMicrosoftoffice,
    },

]