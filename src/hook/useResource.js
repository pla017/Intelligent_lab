import xlysj from '@/assets/imgs/books/心理学与生活.png'
import kwhhg from '@/assets/imgs/books/跨文化沟通.png'
import xlxshuo from '@/assets/imgs/books/生活中的情绪心理学.png'
import zgxlcs from '@/assets/imgs/books/中国积极心理测评手册.png'
import zsxf from '@/assets/imgs/books/真实的幸福.png'
import xl from '@/assets/imgs/books/心流.png'
import ydxlqy from '@/assets/imgs/books/运动心理学前沿.png'
import hdzdxl from '@/assets/imgs/books/活出心花怒放的人生.png'
import xfdzz from '@/assets/imgs/books/幸福的种子.png'
import hzdpg from '@/assets/imgs/books/孩子的品格.png'
import psy from '@/assets/imgs/books/psy.png'
import newpa from '@/assets/imgs/books/new.png'



import jijixinlxue from "@/assets/imgs/meihaorensheng.png";
import jiaoxlinxue from "@/assets/imgs/kunkaiping.png";
import jijixinlike from "@/assets/imgs/jijixinlike.png";

import {ref} from 'vue'
export function useResource() {

    let courses = ref([
        {
          title: "《积极心理学》",
          desc: "本课程是积极心理学基础入门的概述性课程，旨在让学生科学系统地了解积极心理学的研究范畴，包括幸福、美德、亲社会心理与行为、福流、价值观与人生意义、积极心理学应用等内容。",
          teacher: "彭凯平 赵昱鲲",
          icon: jijixinlxue,
        },
        {
          title: "《教情绪心理学》",
          desc: "从快乐到悲伤，从平静到愤怒，每一种情绪都在告诉我们些关于自己的一些事情。遗憾的是，很多人在面对自己的情绪的时候，却常常感到无助和困惑。这门课用轻松幽默、通俗易懂的语言，教我们如何去理解并妥善管理这些复杂的情绪，活出积极、有意义的幸福人生、",
          teacher: "彭凯平",
          icon: jiaoxlinxue,
        },
        {
          title: "《积极心理课》",
          desc: "本课程是积极心理学基础入门的概述性课程，旨在让学生科学系统地了解积极心理学的研究范畴，包括幸福、美德、亲社会心理与行为、福流、价值观与人生意义、积极心理学应用等内容。",
          teacher: "彭凯平",
          icon: jijixinlike,
        },
      ]);
  const books = ref([
    {
      title: "幸福的种子：我的心理学入门书",
      author: "彭凯平",
      desc: "书中以平实易懂的语言，结合生活中常见的场景与案例，深入浅出地讲解心理学知识。从剖析日常行为背后的心理动机，到探讨情绪管理、人际关系处理等实用话题，助力读者开启探索内心世界的大门，收获幸福生活的密码。",
      icon: xfdzz,
    },
    {
      title: "活出心花怒放的人生",
      author: "彭凯平",
      desc: "这是一部关于个人成长和幸福生活的指南，全书共十章，通过真实故事和实用方法，帮助读者发现内心的力量，克服生活中的挑战，找到真正的快乐与满足，并以理解自我、掌握心理学知程为基础，收获幸福生活的密码。",
      icon: hdzdxl,
    },
    {
      title: "跨文化沟通",
      author: "彭凯平, 闫伟",
      desc: "全书分为理论部和实务篇，理论篇探讨了文化与沟通的关系、语言和非语言沟通的作用，以及不同文化间的代传递的准则。实务篇聚焦于跨文化沟通的方法理因素、海峡两岸及港澳地区的沟通、商文化交流、成就动机、团队发展等主题，结合团队、教练、竞技场景等社会环境因素对运动行为的影响。",
      icon: kwhhg,
    },
    {
      title: "运动心理学前沿",
      author: "彭凯平",
      desc: "全书分四部分：运动心理学介绍、个体差异与运动行为、社会环境因素与运动行为、运动行为与心理技能和干预技术。书中探讨了自我效能、目标设定、情绪与控制、成就动机、团队发展等主题，结合团队、教练、竞技场景等社会环境因素对运动行为的影响。",
      icon: ydxlqy,
    },
    {
      title: "New Readings In Cultural Psychology",
      author: "彭凯平",
      desc: "本书全面介绍了文化心理学的理论与实践，通过跨文化研究，探讨了文化对人类心理的影响，包括认知、情绪、人格、社会行为等多个领域。作者结合东方与西方文化的对比，展示了文化心理学在理解人类行为方面的独特贡献。",
      icon: newpa,
    },
    {
      title: "心流：最优体验心理学",
      author: "米哈里·契克森米哈赖",
      desc: "本书系统阐述了心流理论，用人们全身心投入某项活动时达到的忘我状态的最优体验，作者通过大量研究，展示了进入心流状态的条件，并且日常生活、休闲娱乐、工作和人际关系等方面，都可以达到心流状态。",
      icon: xl,
    },
    {
      title: "中国积极心理测评手册",
      author: "彭凯平, 孙沛, 倪士光",
      desc: "本书是一部系统性极强的积极心理测评工具手册，涵盖了积极心理学领域的主要测评工具，包括幸福感、心理健康、积极情绪、人格优势等多个领域，精选了78个信效度高且本土化的测评量表。",
      icon: zgxlcs,
    },
    {
      title: "生活中的情绪心理学：来自内心深处的福流",
      author: "彭凯平",
      desc: "全书分三大篇幅，从情绪管理的角度出发，探讨如何将情绪转化为积极力量，培养积极情绪以及提升幸福感，作者结合心理学理论与实践，深入浅地分析了信念、情绪、孤独等常见情绪，并提供科学的应对策略。",
      icon: xlxshuo,
    },
    {
      title: "孩子的品格——写给父母的积极心理学",
      author: "彭凯平, 闫伟",
      desc: "本书是一部以积极心理学为基础的育儿指导书籍，全书分九章，围绕培养孩子品格优势的核心七要素展开，包括情绪力、压迫力、自我效能感、自控力、天赋等方面的内容。",
      icon: hzdpg,
    },
    {
      title: "Psychological And Cultural Foundations Of East Asian Cognition: Contradiction, Change, And Holism",
      author: "Julie Spencer-Rodgers, Kaiping Peng",
      desc: "本书结合丰富的实证研究，分析了东亚与西方文化在决策、自我认知、人际关系、情绪管理等方面的差异，并讨论了这些差异在商业、教育、临床心理学等领域的实际应用。",
      icon: psy,
    },
    {
      title: "真实的幸福",
      author: "马丁·塞利格曼",
      desc: "书中提出了幸福的'PERMA'模型，将幸福细分分为积极情绪、沉浸感、人际关系、意义和成就五个要素。塞利格曼认为，真正的幸福来源于对自身优势的识别和运用，以及对生活意义的追求。",
      icon: zsxf,
    },
    {
      title: "心理学与生活",
      author: "弗洛伊德·利昂·鲁昌, 菲利普·津巴多, 理查德·格里格",
      desc: "全书共16章，系统介绍了心理学的基本原理、研究方法、生物基础、感知、意识、记忆、情绪、人格、社会心理学核心内容。",
      icon: xlysj,
    }
  ]);

  return {
    books,
    courses,
  }
}