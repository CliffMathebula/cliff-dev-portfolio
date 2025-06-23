import React from 'react';
import {
    FaCode, FaServer, FaCloud, FaShieldAlt, FaAws,
    FaJava, FaPhp, FaPython, FaNodeJs
} from 'react-icons/fa';
import {
    SiSpring, SiLaravel, SiSymfony, SiKubernetes, SiDocker, SiJenkins,
    SiGitlab, SiPostgresql, SiMongodb, SiMysql, SiRabbitmq, SiApachekafka,
    SiAngular, SiVuedotjs, SiDotnet, SiDjango, SiRubyonrails, SiTailwindcss,
    SiBootstrap, SiPostman, SiSharp, SiRedis, SiGit
} from 'react-icons/si';

const SiOpenshift = FaCloud;
const imageUrl = "/images/me.jpg";

const techStack = [
    { icon: <FaJava color="#f89820" />, name: "Java", category: "language" },
    { icon: <SiSpring color="#6DB33F" />, name: "Spring Boot", category: "framework" },
    { icon: <FaPhp color="#8892BF" />, name: "PHP", category: "language" },
    { icon: <SiLaravel color="#FF2D20" />, name: "Laravel", category: "framework" },
    { icon: <SiSymfony color="#000000" />, name: "Symfony", category: "framework" },
    { icon: <FaNodeJs color="#3C873A" />, name: "Node.js", category: "runtime" },
    { icon: <SiAngular color="#DD0031" />, name: "Angular", category: "framework" },
    { icon: <SiVuedotjs color="#42b883" />, name: "Vue.js", category: "framework" },
    { icon: <SiDjango color="#092E20" />, name: "Django", category: "framework" },
    { icon: <SiDotnet color="#512BD4" />, name: ".NET", category: "framework" },
    { icon: <SiRubyonrails color="#CC0000" />, name: "Ruby on Rails", category: "framework" },
    { icon: <SiSharp color="#512BD4" />, name: "C#", category: "language" },
    { icon: <FaPython color="#3776AB" />, name: "Python", category: "language" },
    { icon: <SiDocker color="#0db7ed" />, name: "Docker", category: "devops" },
    { icon: <SiKubernetes color="#326CE5" />, name: "Kubernetes", category: "devops" },
    { icon: <SiOpenshift color="#EE0000" />, name: "OpenShift", category: "devops" },
    { icon: <SiJenkins color="#D24939" />, name: "Jenkins", category: "devops" },
    { icon: <SiGitlab color="#FC6D26" />, name: "GitLab CI", category: "devops" },
    { icon: <FaAws color="#FF9900" />, name: "AWS", category: "cloud" },
    { icon: <SiPostgresql color="#336791" />, name: "PostgreSQL", category: "database" },
    { icon: <SiMongodb color="#47A248" />, name: "MongoDB", category: "database" },
    { icon: <SiMysql color="#00758F" />, name: "MySQL", category: "database" },
    { icon: <SiRedis color="#DC382D" />, name: "Redis", category: "database" },
    { icon: <SiRabbitmq color="#FF6600" />, name: "RabbitMQ", category: "messaging" },
    { icon: <SiApachekafka color="#231F20" />, name: "Kafka", category: "messaging" },
    { icon: <SiTailwindcss color="#38B2AC" />, name: "TailwindCSS", category: "css" },
    { icon: <SiBootstrap color="#7952B3" />, name: "Bootstrap", category: "css" },
    { icon: <SiPostman color="#FF6C37" />, name: "Postman", category: "tool" },
    { icon: <SiGit color="#F1502F" />, name: "Git", category: "vcs" }
];

export default function HeroSection() {
    return (
        <section className="mt-5 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-950 py-20">
            <div className="max-w-6xl mx-auto px-6">
                
                {/* Enhanced Profile Image with Indigo Glow */}
                <div className="relative w-48 h-48 mx-auto rounded-full overflow-hidden border-4 border-indigo-500 dark:border-indigo-600 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group">
                    <div className="absolute inset-0 rounded-full bg-indigo-500/10 dark:bg-indigo-600/20 blur-md group-hover:opacity-70 transition-opacity duration-300"></div>
                    <img 
                        src={imageUrl} 
                        alt="Cliff Mathebula" 
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-300 relative z-10" 
                    />
                    <div className="absolute inset-0 rounded-full border-2 border-indigo-300/50 dark:border-indigo-400/50 pointer-events-none z-20"></div>
                </div>
                
                <div className="bg-gray-800 dark:bg-gradient-to-r dark:from-indigo-900 dark:to-gray-900 py-2 shadow-md dark:shadow-xl mt-4">
                    <div className="max-w-8xl mx-auto text-center">
                        <h2 className="text-indigo-600 dark:text-indigo-400 uppercase text-sm mt-6 font-semibold tracking-wider">Full Stack Software Engineer</h2>

                        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 mt-6">
                            Cliff Mathebula
                        </h1>
                        <p className="text-xl text-indigo-100 dark:text-gray-300 max-w-3xl mb-4 mx-auto">
                            Full Stack Software Engineer & Cloud Infrastructure Specialist with 6+ years of experience building scalable systems.
                        </p>
                    </div>
                </div>

                {/* Tech Stack Section */}
                <div className="mt-10 text-center">
                    <h3 className="text-gray-500 dark:text-gray-400 uppercase tracking-wider text-sm mb-3">Tech Stack</h3>
                    <div className="flex flex-wrap justify-center gap-3">
                        {techStack.map((tech, i) => (
                            <span
                                key={i}
                                className="inline-flex items-center gap-2 px-3 py-1 bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 rounded-full text-sm shadow-sm hover:scale-105 hover:shadow-md hover:bg-gray-200 dark:hover:bg-gray-700 transition-all duration-200"
                            >
                                {tech.icon} {tech.name}
                            </span>
                        ))}
                    </div>
                </div>

                {/* Feature Cards */}
                <div className="mt-16 grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                    <FeatureCard
                        title="Full Stack Development"
                        description="Spring Boot, Laravel & modern JS frameworks."
                        icon={<FaCode className="w-6 h-6" />}
                        color="indigo"
                    />
                    <FeatureCard
                        title="Cloud & DevOps"
                        description="Docker, K8s, OpenShift, and CI/CD pipelines."
                        icon={<FaCloud className="w-6 h-6" />}
                        color="emerald"
                    />
                    <FeatureCard
                        title="System Architecture"
                        description="Microservices & event-driven patterns."
                        icon={<FaServer className="w-6 h-6" />}
                        color="sky"
                    />
                </div>

                {/* Secure Systems Engineering Section */}
                <div className="mt-16 bg-gray-100 dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-gray-200 dark:border-gray-700">
                    <div className="p-8 md:p-10">
                        <div className="flex flex-col md:flex-row items-start gap-8">
                            <div className="flex-shrink-0">
                                <div className="flex items-center justify-center w-16 h-16 rounded-full bg-indigo-100 dark:bg-indigo-900/30 text-indigo-700 dark:text-indigo-300 shadow-sm border border-indigo-200 dark:border-indigo-800">
                                    <FaShieldAlt className="w-8 h-8" />
                                </div>
                            </div>
                            <div className="flex-1">
                                <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-3">Secure Systems Engineering</h3>
                                <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                                    Enterprise-grade security implementation with OAuth2, JWT, and RBAC across multiple tech stacks:
                                </p>

                                <div className="mt-8 grid grid-cols-1 lg:grid-cols-2 gap-6">
                                    {/* Java Code Card */}
                                    <div className="border border-gray-300 dark:border-gray-700 rounded-lg overflow-hidden bg-gray-200 dark:bg-gray-900/60 hover:bg-gray-300 dark:hover:bg-gray-900 transition-all">
                                        <div className="p-3 border-b border-gray-300 dark:border-gray-700 bg-gray-300 dark:bg-gray-800">
                                            <div className="flex items-center gap-2">
                                                <span className="w-3 h-3 rounded-full bg-red-500 dark:bg-red-500"></span>
                                                <span className="w-3 h-3 rounded-full bg-yellow-500 dark:bg-yellow-500"></span>
                                                <span className="w-3 h-3 rounded-full bg-green-500 dark:bg-green-500"></span>
                                                <span className="ml-2 text-sm font-mono text-gray-800 dark:text-gray-300">AuthController.java</span>
                                            </div>
                                        </div>
                                        <div className="p-4">
                                            <pre className="text-sm font-mono text-gray-800 dark:text-gray-300">
                                                <code className="block whitespace-pre overflow-x-auto">{`@RestController
@RequestMapping("/api/auth")
public class AuthController {
    
    @PostMapping("/login")
    public ResponseEntity<JwtResponse> authenticateUser(
        @Valid @RequestBody LoginRequest loginRequest) {
        
        Authentication authentication = authenticationManager.authenticate(
            new UsernamePasswordAuthenticationToken(
                loginRequest.getUsername(),
                loginRequest.getPassword()));
        
        SecurityContextHolder.getContext()
            .setAuthentication(authentication);
        String jwt = jwtUtils.generateJwtToken(authentication);
        
        return ResponseEntity.ok(new JwtResponse(jwt));
    }
}`}</code>
                                            </pre>
                                        </div>
                                    </div>

                                    {/* PHP Code Card */}
                                    <div className="border border-gray-300 dark:border-gray-700 rounded-lg overflow-hidden bg-gray-200 dark:bg-gray-900/60 hover:bg-gray-300 dark:hover:bg-gray-900 transition-all">
                                        <div className="p-3 border-b border-gray-300 dark:border-gray-700 bg-gray-300 dark:bg-gray-800">
                                            <div className="flex items-center gap-2">
                                                <span className="w-3 h-3 rounded-full bg-red-500 dark:bg-red-500"></span>
                                                <span className="w-3 h-3 rounded-full bg-yellow-500 dark:bg-yellow-500"></span>
                                                <span className="w-3 h-3 rounded-full bg-green-500 dark:bg-green-500"></span>
                                                <span className="ml-2 text-sm font-mono text-gray-800 dark:text-gray-300">AuthController.php</span>
                                            </div>
                                        </div>
                                        <div className="p-4">
                                            <pre className="text-sm font-mono text-gray-800 dark:text-gray-300">
                                                <code className="block whitespace-pre overflow-x-auto">{`// Laravel/Symfony JWT Authentication
public function login(Request $request) {
    $credentials = $request->only('email', 'password');

    if (!$token = auth()->attempt($credentials)) {
        return response()->json([
            'error' => 'Unauthorized'
        ], 401);
    }

    return response()->json([
        'access_token' => $token,
        'token_type' => 'bearer',
        'expires_in' => auth()->factory()
            ->getTTL() * 60
    ]);
}`}</code>
                                            </pre>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

function FeatureCard({ title, description, icon, color = 'indigo' }) {
    const colorMap = {
        indigo: {
            text: 'text-indigo-400',
            bg: 'bg-indigo-50 dark:bg-indigo-900/30',
            hoverBg: 'bg-indigo-100 dark:bg-indigo-900/50'
        },
        emerald: {
            text: 'text-emerald-400',
            bg: 'bg-emerald-50 dark:bg-emerald-900/30',
            hoverBg: 'bg-emerald-100 dark:bg-emerald-900/50'
        },
        sky: {
            text: 'text-sky-400',
            bg: 'bg-sky-50 dark:bg-sky-900/30',
            hoverBg: 'bg-sky-100 dark:bg-sky-900/50'
        }
    };

    return (
        <div className={`group relative bg-white dark:bg-gray-800 rounded-xl shadow-md p-6 flex flex-col items-start gap-4 transition-all duration-300 hover:-translate-y-2 hover:scale-[1.03] hover:shadow-xl ${colorMap[color].bg} hover:${colorMap[color].hoverBg} overflow-hidden`}>
            <div className={`p-3 rounded-full ${colorMap[color].bg} ${colorMap[color].text} group-hover:rotate-12 transition-transform duration-300 z-10`}>
                {icon}
            </div>
            <h4 className="text-lg font-semibold text-gray-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors duration-300 z-10">
                {title}
            </h4>
            <p className="text-gray-600 dark:text-gray-300 text-sm group-hover:text-gray-800 dark:group-hover:text-gray-200 transition-colors duration-300 z-10">
                {description}
            </p>
        </div>
    );
}