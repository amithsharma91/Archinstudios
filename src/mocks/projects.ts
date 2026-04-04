export interface Project {
  id: string;
  title: string;
  location: string;
  modelImage: string;
  executedImage: string;
  category: string;
  extraModelImage?: string;
  extraExecutedImage?: string;
  singleTag?: string;
}

export const residentialProjects: Project[] = [
  {
    id: 'res-001',
    title: 'Mr & Mrs Amruth Shreya',
    location: 'Whitefield, Bangalore',
    modelImage: 'https://static.readdy.ai/image/72ebb3450643617b8a5b38c5c017e687/55518878ccb58ce0179dfb755002def3.jpeg',
    executedImage: 'https://static.readdy.ai/image/72ebb3450643617b8a5b38c5c017e687/ed2bdb6ac06c34d86470dab8a866b3a0.jpeg',
    category: 'residential',
  },
  {
    id: 'res-002',
    title: 'Mr. Mohan Residence',
    location: 'Indiranagar, Bangalore',
    modelImage: 'https://static.readdy.ai/image/72ebb3450643617b8a5b38c5c017e687/37fdb6d8b5f33c763a729e822b25a639.jpeg',
    executedImage: 'https://static.readdy.ai/image/72ebb3450643617b8a5b38c5c017e687/52ea36a1f5829ff79afa7074cb3629ad.jpeg',
    category: 'residential',
  },
  {
    id: 'res-003',
    title: 'Mr. Nagesh Residence',
    location: 'Jayanagar, Bangalore',
    modelImage: 'https://static.readdy.ai/image/72ebb3450643617b8a5b38c5c017e687/f391c6997b5b4c8819532dbb41cfebcf.jpeg',
    executedImage: 'https://static.readdy.ai/image/72ebb3450643617b8a5b38c5c017e687/de7295a74136e4957b7c8cdddad97730.jpeg',
    category: 'residential',
  },
  {
    id: 'res-004',
    title: 'Mr. Raghu Residence',
    location: 'Koramangala, Bangalore',
    modelImage: 'https://static.readdy.ai/image/72ebb3450643617b8a5b38c5c017e687/0c42c1aad9b93ae25c995729f0d25df1.jpeg',
    executedImage: 'https://static.readdy.ai/image/72ebb3450643617b8a5b38c5c017e687/187132706f9e95aade3e27f9fbc747c0.jpeg',
    category: 'residential',
  },
  {
    id: 'res-005',
    title: 'Mr. Suresh Residence',
    location: 'Bangalore',
    modelImage: 'https://storage.readdy-site.link/project_files/96a3b98c-9790-4aa6-b897-2e38de9e112e/c3a79995-a41d-4d20-8dae-0496def0f3d5_HEIF-Image.jpeg?v=d7cfe1bfa86648cc9cbaf286baa819d6',
    executedImage: 'https://storage.readdy-site.link/project_files/96a3b98c-9790-4aa6-b897-2e38de9e112e/c3a79995-a41d-4d20-8dae-0496def0f3d5_HEIF-Image.jpeg?v=f2533709be80deda9c565f2ad1ab2e83',
    category: 'residential',
    singleTag: 'Executed Work',
  },
];

export const interiorProjects: Project[] = [
  {
    id: 'int-001',
    title: 'Interior Design',
    location: 'Bangalore',
    modelImage: 'https://storage.readdy-site.link/project_files/96a3b98c-9790-4aa6-b897-2e38de9e112e/be6ec83f-bb7f-429c-b59a-43ec68f37e85_IMG-20260404-WA0036.jpg?v=bc4dcdbc426aedfbe243117a819e8023',
    executedImage: 'https://storage.readdy-site.link/project_files/96a3b98c-9790-4aa6-b897-2e38de9e112e/94678f09-e353-4cdc-936c-eae7ea394cd6_IMG-20260404-WA0035.jpg?v=7e7524e1cf0d0bc814238963f224a0a9',
    category: 'interior',
  },
  {
    id: 'int-002',
    title: 'Interior Design',
    location: 'Bangalore',
    modelImage: 'https://storage.readdy-site.link/project_files/96a3b98c-9790-4aa6-b897-2e38de9e112e/72aaf8e7-b088-4492-8e63-9703aa55f355_IMG-20260404-WA0037.jpg?v=f4e09253b7758fef8951b7002614b14e',
    executedImage: 'https://storage.readdy-site.link/project_files/96a3b98c-9790-4aa6-b897-2e38de9e112e/b93c8d85-3ed3-4846-9760-a72d01045f7e_IMG-20260404-WA0045.jpg?v=c8af51f931fddaf4f80e45096c7a9558',
    category: 'interior',
  },
];

export const renovationProjects: Project[] = [
  {
    id: 'ren-001',
    title: 'Mr. Narayanaswamy',
    location: 'Basavanagudi, Bangalore',
    modelImage: 'https://static.readdy.ai/image/72ebb3450643617b8a5b38c5c017e687/d15c1dd57a6c7baa9fb8b181a510523b.jpeg',
    executedImage: 'https://static.readdy.ai/image/72ebb3450643617b8a5b38c5c017e687/bd063affdd127ce29fea1202118df5ec.jpeg',
    category: 'renovation',
  },
  {
    id: 'ren-002',
    title: 'Mr. Paramesh Residence',
    location: 'Jayanagar, Bangalore',
    modelImage: 'https://static.readdy.ai/image/72ebb3450643617b8a5b38c5c017e687/ce3eb2b3a851f01b822c6b77779160a3.jpeg',
    executedImage: 'https://static.readdy.ai/image/72ebb3450643617b8a5b38c5c017e687/95139f9b1582dd221fcafa3cb078db16.jpeg',
    category: 'renovation',
  },
];

export const conventionProjects: Project[] = [
  {
    id: 'con-001',
    title: 'Mr. & Mrs. Vasavi Convention Hall, Gudibande',
    location: 'Gudibande, Karnataka',
    modelImage: 'https://static.readdy.ai/image/72ebb3450643617b8a5b38c5c017e687/25eda19b14f6a16e7b70e3c67491a28d.jpeg',
    executedImage: 'https://static.readdy.ai/image/72ebb3450643617b8a5b38c5c017e687/d4326670dac691e0afedd00331c2f4e8.jpeg',
    category: 'convention',
  },
];

export const commercialProjects: Project[] = [
  {
    id: 'com-001',
    title: 'Commercial Building Designs',
    location: 'Bangalore',
    modelImage: 'https://static.readdy.ai/image/72ebb3450643617b8a5b38c5c017e687/25eda19b14f6a16e7b70e3c67491a28d.jpeg',
    executedImage: 'https://static.readdy.ai/image/72ebb3450643617b8a5b38c5c017e687/d4326670dac691e0afedd00331c2f4e8.jpeg',
    category: 'commercial',
  },
  {
    id: 'com-002',
    title: 'Commercial Building Designs',
    location: 'Bangalore',
    modelImage: 'https://static.readdy.ai/image/72ebb3450643617b8a5b38c5c017e687/5cbf33eba542fe599c3528dae3af17dc.jpeg',
    executedImage: 'https://static.readdy.ai/image/72ebb3450643617b8a5b38c5c017e687/bbf63f100d20df09b662ee56b01cd6eb.jpeg',
    category: 'commercial',
  },
  {
    id: 'com-003',
    title: 'Commercial Building Designs',
    location: 'Bangalore',
    modelImage: 'https://static.readdy.ai/image/72ebb3450643617b8a5b38c5c017e687/c94fefb42b96c3e2cdbff4fde89e7c27.jpeg',
    executedImage: 'https://static.readdy.ai/image/72ebb3450643617b8a5b38c5c017e687/fad6cb665dace49374a0c9ccad191cca.jpeg',
    extraModelImage: 'https://static.readdy.ai/image/72ebb3450643617b8a5b38c5c017e687/26f80625584130a4e654642f113bed70.jpeg',
    extraExecutedImage: 'https://static.readdy.ai/image/72ebb3450643617b8a5b38c5c017e687/4edd4980efa9271ead632f4a55136dba.jpeg',
    category: 'commercial',
  },
];

export const industrialProjects: Project[] = [
  {
    id: 'ind-001',
    title: 'Industrial Project',
    location: 'Bangalore',
    modelImage: 'https://storage.readdy-site.link/project_files/96a3b98c-9790-4aa6-b897-2e38de9e112e/c3a79995-a41d-4d20-8dae-0496def0f3d5_HEIF-Image.jpeg?v=9f3028b696ea132673625e4539670add',
    executedImage: 'https://storage.readdy-site.link/project_files/96a3b98c-9790-4aa6-b897-2e38de9e112e/c3a79995-a41d-4d20-8dae-0496def0f3d5_HEIF-Image.jpeg?v=9f3028b696ea132673625e4539670add',
    category: 'industrial',
  },
];

export const projectCategories = [
  {
    id: 'residential',
    title: 'Residential Architecture',
    description: 'Bespoke homes that reflect your lifestyle and aspirations. From contemporary villas to traditional residences, we design spaces that become sanctuaries.',
    projects: residentialProjects,
    viewAllLink: '/projects/residential',
    viewAllText: 'View All Residential Projects',
  },
  {
    id: 'interior',
    title: 'Interior Design',
    description: 'Transform interiors into extraordinary experiences. Our interior designs blend functionality with aesthetic excellence, creating spaces that inspire.',
    projects: interiorProjects,
    viewAllLink: '/projects/interior',
    viewAllText: 'View All Interior Projects',
  },
  {
    id: 'renovation',
    title: 'Renovation',
    description: 'Breathe new life into existing spaces. Our renovation expertise transforms outdated structures into modern, functional, and beautiful environments.',
    projects: renovationProjects,
    viewAllLink: '/projects/renovation',
    viewAllText: 'View All Renovation Projects',
  },
  {
    id: 'convention',
    title: 'Convention Halls',
    description: 'Grand spaces for memorable gatherings. We design convention halls and banquet facilities that combine architectural grandeur with practical functionality.',
    projects: conventionProjects,
    viewAllLink: '/projects/convention-halls',
    viewAllText: 'View All Convention Hall Projects',
  },
  {
    id: 'commercial',
    title: 'Commercial',
    description: 'Workspaces that drive success. From corporate offices to retail environments, we create commercial spaces that elevate brands and enhance productivity.',
    projects: commercialProjects,
    viewAllLink: '/projects/commercial',
    viewAllText: 'View All Commercial Projects',
  },
  {
    id: 'industrial',
    title: 'Industrial',
    description: 'Engineered for scale and built for performance. Our industrial facilities — from warehouses to manufacturing plants — combine structural precision with efficient spatial planning.',
    projects: industrialProjects,
    viewAllLink: '/projects/industrial',
    viewAllText: 'View All Industrial Projects',
  },
];
