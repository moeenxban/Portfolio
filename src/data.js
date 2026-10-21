export const profile = {
  firstName: 'Moeen',
  lastName: 'Banoori',
  fullName: 'Syed Ghulam Moeen Ud Din Shah Banoori',
  shortTitle: 'AI Engineer',
  tagline: 'AI Engineer chasing the dream every coder has: the farm life.',
  location: 'Islamabad, Pakistan',
  email: 'banoorimoeen@gmail.com',
  phone: '+92 342 9253993',
  linkedin: 'https://www.linkedin.com/in/syed-ghulam-moeen-ud-din-banoori-05227330a',
  github: 'https://github.com/moeenxban',
  resume: '/assets/Moeen-Resume.pdf',
  photo: '/assets/me.jpg',
  heroVideo: '/assets/hero.mp4',
  roles: [
    'Founder, FAYSA AI',
    'Agentic AI',
    'RAG Systems',
    'Computer Vision',
    'Farmer-in-training',
    'Novelist',
    'Cricket',
  ],
}

export const mediaFeatures = [
  { outlet: 'Discover Pakistan', label: 'AI-driven hardware innovation', url: 'https://www.facebook.com/share/v/16Dma5HFFL/?mibextid=wwXIfr' },
  { outlet: 'Voice of KP', label: 'Tech & hardware innovation in Khyber Pakhtunkhwa', url: 'https://www.facebook.com/share/v/1DfWx9MEdH/?mibextid=wwXIfr' },
  { outlet: 'Dialogue Pakistan', label: 'Rising tech innovator in smart surveillance', url: 'https://www.facebook.com/share/v/1HXK1cvzPa/?mibextid=wwXIfr' },
]

export const products = [
  {
    title: 'Vitae',
    subtitle: 'AI Avatar Tutor & Offline RAG Assistant',
    tag: 'RUNNING PRODUCT',
    year: '2026',
    stack: ['RAG', 'Qdrant', 'Local LLM', 'STT/TTS'],
    url: 'https://vitae-ai-roan.vercel.app/',
    image: '/assets/products/vitae.svg',
    note: 'Live · try it in the browser',
    summary:
      'An AI avatar tutor that answers professor and student queries with zero paid LLM APIs. Local embeddings, Qdrant vector search, offline document ingestion, and voice interaction built for low cost institutional deployment. It teaches, it listens, and it never bills you.',
  },
  {
    title: 'Kroppr',
    subtitle: 'AI Content Automation Platform',
    tag: 'RUNNING PRODUCT',
    year: '2026',
    stack: ['FastAPI', 'React', 'Whisper AI', 'FFmpeg'],
    url: 'https://kroppr-web.vercel.app/',
    image: '/assets/products/kroppr.svg',
    note: 'Live · try it in the browser',
    summary:
      'A self hosted platform that turns long form video into short form content. Scene detection, AI clip selection, auto captioning, thumbnail generation, and multi platform publishing through one modular pipeline. Bring the hour long lecture, leave with the sixty second highlight.',
  },
  {
    title: 'Trading Bot',
    subtitle: 'Algorithmic Crypto Trading Bot',
    tag: 'ML & QUANT',
    year: '2025',
    stack: ['Python', 'Pandas', 'CCXT', 'AsyncIO'],
    url: null,
    image: '/assets/products/trading.svg',
    note: 'In production · no public link',
    summary:
      'A fully automated bot that studies 260,000+ BTC/USDT candles across multiple timeframes. EMA-200 trend filters, Bollinger squeeze detection, RSI momentum, ATR stop losses, and a backtesting engine that refuses to peek at the future.',
  },
  {
    title: 'Attendance AI',
    subtitle: 'Camera-Based Attendance & Discipline Monitoring',
    tag: 'DEPLOYED LIVE',
    year: '2024',
    stack: ['FaceNet', 'ESP32-CAM', 'OpenCV', 'SQL'],
    url: null,
    image: '/assets/products/attendance.svg',
    note: 'Deployed on site · no public link',
    summary:
      'A FaceNet powered recognition system deployed at Fauji Foundation School, Chaklala. ESP32-CAM capture, Haar Cascade detection, uniform discipline monitoring, and SQL backed attendance logging. It remembers who showed up so you don\u2019t have to.',
  },
  {
    title: 'Open Contract',
    subtitle: 'Evidence First Commercial Intelligence for Construction',
    tag: 'IN DEVELOPMENT',
    year: '2026',
    stack: ['Next.js', 'FastAPI', 'PostgreSQL', 'Local LLM', 'RAG'],
    url: null,
    image: '/assets/products/opencontract.svg',
    note: 'In development · private pilot',
    summary:
      'Turns the documents a construction project already produces into evidence backed scope change findings. Deterministic quantity variance detection, a human confirmed baseline, and every claim tied to a page locator. AI interprets, evidence supports, code calculates, qualified humans decide.',
  },
]

export const projects = [
  {
    title: 'FAYSA AI',
    subtitle: 'AI Product Studio & Consulting',
    tag: 'COMPANY',
    year: '2026',
    stack: ['Agentic AI', 'RAG', 'Computer Vision', 'Python'],
    url: null,
    image: '/assets/products/faysa.svg',
    summary:
      'FAYSA AI is my own company: an AI product studio that designs, builds and ships agentic AI systems, RAG pipelines and computer vision products for real businesses. Consulting, product development and applied research, run end to end by me.',
  },
  {
    title: 'VoiceBridge',
    subtitle: 'Communication Platform for Non-Verbal Children',
    tag: 'IMPACT',
    year: '2024',
    stack: ['Whisper', 'ElevenLabs', 'TTS/STT'],
    url: null,
    image: '/assets/products/voicebridge.svg',
    summary:
      'Helps non-verbal autistic children express emotions, needs, and intent. Whisper speech interpretation, natural TTS responses, and voice cloning so encouragement arrives in a parent\u2019s voice.',
  },
  {
    title: 'Enterprise ETL & Data Pipelines',
    subtitle: 'End-to-End Telemetry, Automation & LLM Preprocessing',
    tag: 'DATA & AUTOMATION',
    year: '2025',
    stack: ['Python', 'PostgreSQL', 'FastAPI', 'LLMs'],
    url: null,
    image: '/assets/products/etl.svg',
    summary:
      'Handled and wrote complete ETL pipelines end to end. Telemetry ingestion and cleaning feeding root cause analysis and reporting, PostgreSQL automation for job orchestration, plus an LLM data preprocessing pipeline with cleaning, tokenization, BPE, embeddings, and causal attention for model training.',
  },
  {
    title: 'Edwardes Hostel AI',
    subtitle: 'AI Hostel Monitoring & Discipline System',
    tag: 'DEPLOYED LIVE',
    year: '2025',
    stack: ['OpenCV', 'YOLO', 'Analytics', 'SQL'],
    url: null,
    image: '/assets/products/hostel.svg',
    summary:
      'Computer vision monitoring deployed at Edwardes College, Peshawar. Real time surveillance with YOLO detection, discipline event analytics, and a reporting dashboard for hostel administration. The dormitories have never been this organized.',
  },
  {
    title: 'Breast Cancer Classifier',
    subtitle: '97.3% Accurate Detection Network',
    tag: 'ML RESEARCH',
    year: '2024',
    stack: ['Neural Networks', 'CNNs', 'Python'],
    url: null,
    image: '/assets/products/breastcancer.svg',
    summary:
      'A deep learning model for breast cancer detection reaching 97.3% accuracy. CNN architecture with careful preprocessing, class balancing, and evaluation on real medical image data.',
  },
  {
    title: 'Emotion Detection',
    subtitle: 'Real-Time Facial Emotion Recognition',
    tag: 'COMPUTER VISION',
    year: '2024',
    stack: ['OpenCV', 'YOLO', 'Deep Learning'],
    url: null,
    image: '/assets/products/emotion.svg',
    summary:
      'A vision pipeline that reads facial emotion from video frames in real time. Face detection, feature extraction, and a classification head tuned for expressive accuracy. It can tell when the class is lost.',
  },
  {
    title: 'Image Captioning',
    subtitle: 'Automatic Description from Pixels',
    tag: 'NLP + VISION',
    year: '2024',
    stack: ['CNNs', 'Transformers', 'NLP'],
    url: null,
    image: '/assets/products/captioning.svg',
    summary:
      'An encoder decoder model that generates natural language captions for images. A CNN vision encoder fused with a sequence decoder for coherent, context aware descriptions. A poet for pixels.',
  },
  {
    title: 'Deep Irrigation',
    subtitle: 'Smart Precision Irrigation System',
    tag: 'IOT & ML',
    year: '2025',
    stack: ['IoT', 'ML', 'ESP32', 'Sensors'],
    url: null,
    image: '/assets/products/irrigation.svg',
    summary:
      'IoT sensors feeding a machine learning model for precision irrigation. Soil moisture, crop type, and weather decide optimal water schedules. The farm life, engineered.',
  },
  {
    title: 'Time Travel Bot',
    subtitle: 'RAG-Powered Conversational Chatbot',
    tag: 'RAG & LLM',
    year: '2025',
    stack: ['Mistral', 'Weaviate', 'RAG', 'LangChain'],
    url: null,
    image: '/assets/products/timetravel.svg',
    summary:
      'A retrieval augmented chatbot that answers from private documents. Mistral LLM with Weaviate vector search, chunked retrieval, and grounded replies checked for hallucinations. It only talks about what it actually knows.',
  },
]

export const research = [
  {
    title: 'Generative AI Application for Speech-Impaired Therapy',
    venue: 'Intl. Journal of Innovations in Science & Technology, Vol 7 No 2 (2025)',
    url: 'https://journal.50sea.com/index.php/IJIST/article/view/1383',
    summary:
      'A web based generative AI + voice recognition therapy platform for remote speech rehabilitation. Guided exercises, personalized feedback, and performance tracking.',
  },
  {
    title: 'Feature Engineering for Crop Classification with Sentinel-2',
    venue: 'Intl. Journal of Innovations in Science & Technology, Vol 7 No 3 (2025)',
    url: 'https://journal.50sea.com/index.php/IJIST/article/view/1414',
    summary:
      'Compared feature engineering approaches for crop classification from Sentinel-2 imagery using Random Forest and Gradient Boosting, achieving high accuracy across crop types.',
  },
  {
    title: 'Smart Deep Irrigation System (Ongoing)',
    venue: 'Research in progress',
    url: null,
    summary:
      'IoT sensors + ML for precision irrigation from real time soil moisture, crop type and weather, extending toward vertical irrigation for space efficient urban farming. The farm life, engineered.',
  },
]

export const skills = [
  {
    group: 'Agentic AI & LLM',
    items: ['CrewAI', 'MCP', 'Zep', 'Opik', 'LangChain', 'Ollama'],
  },
  {
    group: 'Retrieval & Vector Search',
    items: ['Qdrant', 'Weaviate', 'Vector Databases', 'Semantic Search'],
  },
  {
    group: 'Computer Vision',
    items: ['YOLO', 'FaceNet', 'OpenCV', 'Whisper AI', 'Haar Cascade'],
  },
  {
    group: 'Machine Learning',
    items: ['CNNs', 'Transformers', 'Classification', 'Feature Engineering'],
  },
  {
    group: 'Backend & Data',
    items: ['Python', 'FastAPI', 'PostgreSQL', 'Docker', 'FFmpeg'],
  },
  {
    group: 'Trading Systems',
    items: ['CCXT', 'Binance API', 'Backtesting', 'Risk Management'],
  },
]

export const stats = [
  { value: 2, suffix: '+', label: 'Published papers' },
  { value: 260, suffix: 'K+', label: 'Candles analyzed' },
  { value: 97.3, suffix: '%', label: 'Model accuracy', decimals: 1 },
  { value: 4, suffix: '', label: 'Roles & ventures' },
]

export const journey = [
  {
    period: '2026 · Present',
    role: 'Founder & Lead Engineer',
    org: 'FAYSA AI',
    points: [
      'Founded FAYSA AI to design, build and ship production AI systems for businesses',
      'AI product development, consulting and applied research under one roof',
      'Client engagements across agentic AI, RAG pipelines and computer vision',
    ],
  },
  {
    period: 'Jul 2025 · May 2026',
    role: 'AI Engineer',
    org: 'Thunder Energy & Intelligence',
    points: [
      'Agentic AI & LLM solutions for business workflows and decision-making',
      'Shipped Zep memory management end to end in a single day, praised by the client',
      'Cut bot hallucinations with Opik evaluation frameworks',
      'PostgreSQL automation for telemetry, RCA and reporting',
    ],
  },
  {
    period: 'Jan 2025 · Jul 2025',
    role: 'Junior AI Engineer',
    org: 'Tadabur Tech',
    points: [
      'Face recognition via Haar Cascade + LBPH',
      'Real time authentication with ESP32-CAM',
      'Edge optimized inference for IoT',
    ],
  },
  {
    period: 'Jul 2024 · Jan 2025',
    role: 'AI Developer · Intern',
    org: 'CODE INFORMATICS',
    points: [
      'AI driven solution for non-verbal children',
      'OpenCV + YOLO vision models with high precision detection & recognition',
    ],
  },
  {
    period: 'Aug 2021 · Jul 2025',
    role: 'B.Sc. Computer Systems Engineering',
    org: 'University of Engineering & Technology, Peshawar',
    points: [
      'English medium education, research driven coursework',
      'Foundations for agentic systems, vision and applied ML',
    ],
  },
]

export const certifications = [
  'Introduction to Model Context Protocol (MCP) · Anthropic',
  'MCP Mastery · Fractal',
  'Docker Fundamentals · LearnKartS',
  'Multi AI Agent Systems with CrewAI · DeepLearning.AI',
  'Master RAG · Udemy',
  'Deep Learning Specialization · DeepLearning.AI',
  'Machine Learning Specialization · DeepLearning.AI',
  'Python for AI & Development · IBM',
]

export const navLinks = [
  { label: 'Work', href: '#work' },
  { label: 'Products', href: '#products' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
]
