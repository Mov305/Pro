import { IconType } from "react-icons";
import {MdWeb,MdGTranslate} from 'react-icons/md';
import {AiOutlineDatabase,AiFillCode} from 'react-icons/ai'
import {CgIfDesign} from 'react-icons/cg'
import {FiType} from 'react-icons/fi'
import {IoCubeOutline} from 'react-icons/io5'

interface Idata {
    title: string;
    about: string;
    icon: IconType;
}

export const data: Idata[] = [
    {
        title: 'Front-end Dev',
        about: 'I build beautiful websites and web applications using <b> HTML </b> <b> CSS </b> <b> JavaScript </b> <b> React js </b>',
        icon: MdWeb
    },
    {
        title: 'Back end developer',
        about: 'I handle database, server and api using <b> Node js </b> <b> Next js </b> <b> Mongo db </b> <b> Fire base </b> ',
        icon: AiOutlineDatabase
    },
    {
        title: 'UI&UX Designer',
        about: 'Aware of Ux rules and use them to make the user experience more comfortable ',
        icon: CgIfDesign
    },
    {
        title: 'Problem solver',
        about: 'I write functions to solve specific proplems from scratch ',
        icon: AiFillCode
    },
    {
        title: 'Solid designs ',
        about: 'I can create solid designs and assemblies using <b> Solid Works </b>',
        icon: IoCubeOutline
    },
    {
        title: 'Typist',
        about: 'I write content, reports and official documents. I am familiar with <b> Word </b> , <b> Exel </b> and  <b>Powerpoint </b> ',
        icon: FiType
    },
    {
        title: 'Translator',
        about: 'I fluent at both Arabic and English, I can translate any piece of work',
        icon: MdGTranslate
    },
]