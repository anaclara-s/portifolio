import { FaHtml5, FaCss3Alt, FaReact, FaNodeJs, FaDartLang, FaFlutter, FaDatabase, FaGitAlt, FaGithub } from "react-icons/fa6";
import { TbBrandKotlin } from "react-icons/tb";
import { IoLogoJavascript } from "react-icons/io5";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiVite, SiAndroidstudio } from "react-icons/si";
import { DiPostgresql } from "react-icons/di";
import { VscVscodeInsiders } from "react-icons/vsc";
import { GrMysql } from "react-icons/gr";


const SkillsIcons = {
    'Front-end': [
        { name: 'HTML', icon: FaHtml5 },
        { name: 'CSS', icon: FaCss3Alt },
        { name: 'JavaScript', icon: IoLogoJavascript },
        { name: 'React', icon: FaReact },
        { name: 'Tailwind CSS', icon: RiTailwindCssFill },
        { name: 'Vite', icon: SiVite }
    ],

    'Back-end': [
        { name: 'Node.js', icon: FaNodeJs }
    ],

    'Mobile': [
        { name: 'Dart', icon: FaDartLang },
        { name: 'Flutter', icon: FaFlutter },
        { name: 'Kotlin', icon: TbBrandKotlin }
    ],

    'Database': [
        { name: 'PostgreSQL', icon: DiPostgresql },
        { name: 'MySQL', icon: GrMysql },
        { name: 'SQL', icon: FaDatabase }
    ],

    'Ferramentas e Plataformas': [
        { name: 'Git', icon: FaGitAlt },
        { name: 'GitHub', icon: FaGithub },
        { name: 'VS Code', icon: VscVscodeInsiders }, 
        { name: 'Android Studio', icon: SiAndroidstudio }
    ]
};

export default SkillsIcons;
