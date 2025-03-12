const nombres = [
    "NovaTech", "InnovaCorp", "SkyNet", "BlueWave", "FutureTech", "SmartVision", "AlphaSoft", "NextGen", "CyberEdge",
    "QuantumTech", "NeuralSync", "Cloudify", "HyperNet", "TechSphere", "AstroBit", "ZenithAI", "NeuroLink", "OmniTech",
    "SkyBridge", "NexusCorp", "InfinityWare", "DigitalWave", "AI Nexus", "ByteForce", "CodeCrafters", "DataMinds", "WebVerse",
    "VirtuSoft", "EvolveTech", "SolarMind", "OptimaCode", "NeonBytes", "CyberCloud", "QuantumByte", "MegaSoft", "GigaTech",
    "CyberElite", "VisionWare", "OmniSoft", "SmartCore", "UltraCode", "HyperLink", "AlphaData", "AI Genius", "DeepSync",
    "NeuroSoft", "MetaCode", "LogicFlow", "InfinityBytes", "TechNova", "CyberSphere", "CodeInfinity", "DataFlow", "AICloud",
    "GeniusCode", "WebMastery", "TechFusion", "VisionCore", "ByteNova", "DigitalElite", "QuantumSync", "FutureMind", "NeuroVision",
    "HyperCore", "CyberLogic", "CloudSync", "AlphaAI", "NextLevel", "EonTech", "DigitalCrafters", "NeuralCode", "InfinityLink",
    "SkyTech", "UltraAI", "ByteSync", "VisionFlow", "WebCrafters", "OmniCloud", "QuantumCore", "GigaCode", "DataSphere",
    "AI Insight", "SmartLink", "MegaAI", "NeuroWare", "CyberFlow", "CodeSync", "InfinitySoft", "HyperWave", "DeepTech",
    "VisionByte", "TechMind", "DataNova", "CyberAI", "AI Sphere", "WebSoft", "NextSoft", "OptimaMind", "CloudByte",
    "NeuralVision", "AstroTech", "SkyAI", "InfinityVision", "EvolveByte", "AlphaMind", "MegaCore", "QuantumLogic", "DigitalSync"
];

function generarNombre() {
    const randomIndex = Math.floor(Math.random() * nombres.length);
    document.getElementById("nombre").innerText = nombres[randomIndex];
}