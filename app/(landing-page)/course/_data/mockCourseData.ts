export interface CourseDetailData {
  id?: string | number;
  title?: string;
  subtitle?: string;
  author?:
    | string
    | {
        name?: string;
        role?: string;
        avatar?: string;
        profileUrl?: string;
        bio?: string;
      };
  level?: string;
  rating?: number;
  reviewCount?: number;
  studentsCount?: number;
  price?: string | number;
  pricePeriod?: string;
  videoThumbnail?: string;
  videoDuration?: string;
  videoUrl?: string;
  totalLessons?: number;
  totalHours?: number;
  features?: string[];
  descriptionParagraphs?: string[];
  sneakPeakImages?: string[];
  keyPoints?: string[];
  learningOutcomes?: string[];
  lessonModules?: {
    title: string;
    description: string;
  }[];
  progressPercentage?: number;
  modules?: {
    title: string;
    duration: string;
    lessons: {
      id: string;
      title: string;
      duration: string;
      isPreview?: boolean;
    }[];
  }[];
  reviewsList?: {
    name: string;
    role?: string;
    avatar: string;
    rating: number;
    date: string;
    comment: string;
  }[];
}

export const defaultCourseData = {
  id: "1",
  title: "Build Digital Asset: A Comprehensive Guide",
  subtitle: "Unlock the Power of Digital Creation with Expert Guidance",
  author: {
    name: "PurePearl Studio",
    role: "Professional Creator",
    avatar: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=120&h=120&fit=crop&crop=faces",
    profileUrl: "/creator-profile/1",
    bio: "Ready to Dive In? Enroll Now and Start Building Your Digital Future!",
  },
  level: "Intermediate",
  rating: 4.8,
  reviewCount: 172,
  studentsCount: 199,
  price: "$25",
  pricePeriod: "/lifetime",
  videoThumbnail: "/course-preview.jpg",
  videoDuration: "24 hours",
  videoUrl: "https://youtu.be/dQw4w9WgXcQ?si=RqfaMPkuGUN4wSAI",
  totalLessons: 112,
  totalHours: 24,
  features: [
    "Learning Resources",
    "Quality Lesson Videos",
    "Certificate of Completion",
    "Private Consultation",
  ],
  descriptionParagraphs: [
    'Embark on an enlightening exploration into the world of digital creation with our comprehensive course, "Build Digital Assets: A Comprehensive Guide." This transformative learning experience invites you to delve deep into the intricacies of crafting impactful digital content. From laying the groundwork with foundational concepts to mastering advanced techniques, this guide is meticulously curated to empower you with the skills essential for navigating the dynamic landscape of digital asset creation.',
    "In the initial modules, you'll establish a solid foundation by immersing yourself in the foundational concepts that form the backbone of digital asset creation. Understand the fundamental elements that constitute compelling digital content and gain proficiency in leveraging these elements to communicate effectively in the digital realm.",
    "As you progress through the course, you'll ascend to higher levels of expertise, delving into the nuances of design principles that drive impactful creations. Uncover the secrets behind effective visual communication, exploring color theory, typography, and layout strategies that elevate your digital assets to new heights. Engage in hands-on exercises that reinforce your understanding, allowing you to apply these principles in practical scenarios.",
  ],
  sneakPeakImages: [
    "https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?w=500&auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=500&auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?w=500&auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=500&auto=format&fit=crop&q=80",
  ],
  keyPoints: [
    "Foundational Concepts",
    "Design Principles Mastery",
    "Advanced Techniques in Digital Creation",
    "Project Showcase and Critique",
    "Optimizing for Various Platforms",
    "Digital Asset Management Best Practices",
    "Monetization Strategies",
    "Capstone Project: Building Your Portfolio",
  ],
  learningOutcomes: [
    "Master high-converting digital product design workflows",
    "Construct reusable component libraries and design tokens",
    "Integrate scalable payment & asset delivery pipelines",
    "Optimize digital asset sales with proven marketing frameworks",
  ],
  modules: [
    {
      title: "Module 1: Foundations of Digital Assets",
      duration: "49 mins",
      lessons: [
        { id: "01", title: "Introduction to Digital Assets", duration: "12 mins", isPreview: true },
        { id: "02", title: "Design Principles for Impacts", duration: "21 mins", isPreview: true },
        { id: "03", title: "Advanced Techniques in Digital Creation", duration: "16 mins", isPreview: false },
      ],
    },
    {
      title: "Module 2: Asset Production & Tooling",
      duration: "1h 45m",
      lessons: [
        { id: "04", title: "Figma to Code Pipeline & Exporting", duration: "24 mins", isPreview: false },
        { id: "05", title: "Structuring 3D & Vector Asset Packs", duration: "32 mins", isPreview: false },
        { id: "06", title: "Automated File Optimization & Compression", duration: "18 mins", isPreview: false },
        { id: "07", title: "Creating Interactive Preview Prototypes", duration: "31 mins", isPreview: false },
      ],
    },
    {
      title: "Module 3: Launch, Monetization & Distribution",
      duration: "2h 10m",
      lessons: [
        { id: "08", title: "Setting Up Your Storefront & Checkout", duration: "28 mins", isPreview: false },
        { id: "09", title: "Pricing Psychology for Digital Goods", duration: "22 mins", isPreview: false },
        { id: "10", title: "Community Building & Feedback Loops", duration: "35 mins", isPreview: false },
        { id: "11", title: "Scaling to $10k/month Recurring Sales", duration: "45 mins", isPreview: false },
      ],
    },
  ],
  reviewsList: [
    {
      name: "PurePearl Studio",
      role: "UI/UX Designer",
      avatar: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=120&h=120&fit=crop&crop=faces",
      rating: 5,
      date: "a year ago",
      comment:
        '"The course provided me with a comprehensive understanding of digital asset creation. The lessons were in-depth, practical, and immediately applicable to my work. Highly recommended!"',
    },
    {
      name: "Albert Flores",
      role: "UI/UX Designer",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=120&h=120&fit=crop&crop=faces",
      rating: 5,
      date: "a year ago",
      comment:
        "This course transformed my approach to digital design. The combination of theory, hands-on exercises, and real-world applications made it a truly enriching experience. Excited to implement what I've learned!",
    },
    {
      name: "Cody Fisher",
      role: "UI/UX Designer",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=120&h=120&fit=crop&crop=faces",
      rating: 5,
      date: "a year ago",
      comment:
        "The project showcase and critique module created a collaborative environment where I could showcase my work, receive valuable feedback, and refine my skills. It added a unique and valuable dimension to the learning process.",
    },
    {
      name: "Brooklyn Simmons",
      role: "UI/UX Designer",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=120&h=120&fit=crop&crop=faces",
      rating: 5,
      date: "a year ago",
      comment:
        "The lessons on optimizing digital assets for various platforms were particularly insightful. The course adapts to the evolving digital landscape, and the engaging content kept me motivated throughout.",
    },
  ],
};

export function resolveCourseData(course?: CourseDetailData) {
  const authorName =
    typeof course?.author === "object" && course.author?.name
      ? course.author.name
      : typeof course?.author === "string"
      ? course.author
      : defaultCourseData.author.name;

  const authorRole =
    typeof course?.author === "object" && course.author?.role
      ? course.author.role
      : defaultCourseData.author.role;

  const authorAvatar =
    typeof course?.author === "object" && course.author?.avatar
      ? course.author.avatar
      : defaultCourseData.author.avatar;

  const authorProfileUrl =
    typeof course?.author === "object" && course.author?.profileUrl
      ? course.author.profileUrl
      : defaultCourseData.author.profileUrl;

  const authorBio =
    typeof course?.author === "object" && course.author?.bio
      ? course.author.bio
      : defaultCourseData.author.bio;

  return {
    id: course?.id || defaultCourseData.id,
    title: course?.title || defaultCourseData.title,
    subtitle: course?.subtitle || defaultCourseData.subtitle,
    level: course?.level || defaultCourseData.level,
    rating: course?.rating || defaultCourseData.rating,
    reviewCount: course?.reviewCount || defaultCourseData.reviewCount,
    studentsCount: course?.studentsCount || defaultCourseData.studentsCount,
    price: course?.price || defaultCourseData.price,
    pricePeriod: course?.pricePeriod || defaultCourseData.pricePeriod,
    videoThumbnail: course?.videoThumbnail || defaultCourseData.videoThumbnail,
    videoDuration: course?.videoDuration || defaultCourseData.videoDuration,
    videoUrl: course?.videoUrl || defaultCourseData.videoUrl,
    totalLessons: course?.totalLessons || defaultCourseData.totalLessons,
    totalHours: course?.totalHours || defaultCourseData.totalHours,
    features: course?.features && course.features.length > 0 ? course.features : defaultCourseData.features,
    descriptionParagraphs:
      course?.descriptionParagraphs && course.descriptionParagraphs.length > 0
        ? course.descriptionParagraphs
        : defaultCourseData.descriptionParagraphs,
    sneakPeakImages:
      course?.sneakPeakImages && course.sneakPeakImages.length > 0
        ? course.sneakPeakImages
        : defaultCourseData.sneakPeakImages,
    keyPoints:
      course?.keyPoints && course.keyPoints.length > 0
        ? course.keyPoints
        : defaultCourseData.keyPoints,
    learningOutcomes:
      course?.learningOutcomes && course.learningOutcomes.length > 0
        ? course.learningOutcomes
        : defaultCourseData.learningOutcomes,
    modules:
      course?.modules && course.modules.length > 0
        ? course.modules
        : defaultCourseData.modules,
    reviewsList:
      course?.reviewsList && course.reviewsList.length > 0
        ? course.reviewsList
        : defaultCourseData.reviewsList,
    author: {
      name: authorName,
      role: authorRole,
      avatar: authorAvatar,
      profileUrl: authorProfileUrl,
      bio: authorBio,
    },
  };
}
