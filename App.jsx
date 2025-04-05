
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail } from "lucide-react";

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-900 text-white px-4 py-8 font-mono">
      <section className="max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold text-blue-400 mb-2">
          MD FAHIM AL SHIHAB
        </h1>
        <p className="text-lg text-gray-300 mb-4">
          Cybersecurity Enthusiast | CTF Player | AI & Cybersecurity Researcher
        </p>

        <div className="flex space-x-4 mb-8">
          <a href="mailto:mdfahimalshihab@gmail.com"><Mail className="w-5 h-5" /></a>
          <a href="#"><Linkedin className="w-5 h-5" /></a>
          <a href="#"><Github className="w-5 h-5" /></a>
        </div>

        <section className="mb-8">
          <h2 className="text-2xl text-blue-300 font-semibold mb-2">Summary</h2>
          <p className="text-gray-300">
            A passionate cybersecurity enthusiast and CTF player with expertise in binary exploitation, reverse engineering, digital forensics, and networking. Aspiring to contribute to cybersecurity research and ethical hacking while continuously improving skills in offensive and defensive security strategies.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl text-blue-300 font-semibold mb-2">Skills</h2>
          <ul className="list-disc list-inside text-gray-300">
            <li><strong>Programming Languages:</strong> Python, C, Java, C#, Assembly, JavaScript</li>
            <li><strong>Cybersecurity & CTF:</strong> Network Engineering, Reverse Engineering, Binary Exploitation, Digital Forensics, Cryptography, OSINT, Web Security, Red Teaming</li>
            <li><strong>Tools:</strong> Linux, Ghidra, IDA, Burp Suite, Wireshark, Metasploit, Maltego, Nmap, Cisco Packet Tracer, Autopsy, Django, TensorFlow</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl text-blue-300 font-semibold mb-2">Experience</h2>
          <Card className="bg-gray-800 mb-4">
            <CardContent className="p-4">
              <h3 className="text-xl font-bold text-white">Team Blind Virus | CTF Player</h3>
              <p className="text-gray-300 text-sm">
                Competed in national and international CTFs; Champion in BCS CTF 2025; Red Team Village Phoenix Summit 2024 Qualifier; 3rd Runner-Up in Cyber Raid 2025.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-gray-800 mb-4">
            <CardContent className="p-4">
              <h3 className="text-xl font-bold text-white">Team Arcanebyets | Backend Developer</h3>
              <p className="text-gray-300 text-sm">
                Participating in Geeky Solutions Learnathon 3.0, working on Django-based backend development.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-gray-800 mb-4">
            <CardContent className="p-4">
              <h3 className="text-xl font-bold text-white">AIUB Robotics Crew | Software Team</h3>
              <p className="text-gray-300 text-sm">
                Developed software for high-performance rover systems used in robotics competitions.
              </p>
            </CardContent>
          </Card>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl text-blue-300 font-semibold mb-2">Projects</h2>
          <ul className="list-disc list-inside text-gray-300">
            <li>Phishing Link Checker – ML/NLP-based phishing detection tool.</li>
            <li>AI-Powered Cybersecurity Chatbot – GAN + ML threat analyzer (Ongoing).</li>
            <li>IFTXs-Gemini-Pro-ChatBot – Chatbot using GeminiPro API for secure conversations.</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl text-blue-300 font-semibold mb-2">Education</h2>
          <p className="text-gray-300">
            BSc in Computer Science & Engineering<br />
            American International University-Bangladesh (AIUB)<br />
            Jan 2022 – Dec 2025
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl text-blue-300 font-semibold mb-2">Volunteering</h2>
          <ul className="list-disc list-inside text-gray-300">
            <li>AIUB Computer Club – General Member</li>
            <li>AIUB CS Fest 2024 – Volunteer, Robot Soccer & Drone Race</li>
            <li>Technoxian Bangladesh – Robo Soccer Segment Co-ordinator</li>
            <li>NASA International Space Apps Challenge – Volunteer</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl text-blue-300 font-semibold mb-2">Certifications</h2>
          <ul className="list-disc list-inside text-gray-300">
            <li>Certified Network Security Practitioner (CNSP) – The SecOps Group</li>
            <li>Cyber Threat Hunting – Active Countermeasures</li>
            <li>Introduction to Cyber Security – TryHackMe</li>
            <li>Introduction to Cybersecurity – Cisco</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl text-blue-300 font-semibold mb-2">Blog</h2>
          <Card className="bg-gray-800 mb-4">
            <CardContent className="p-4">
              <h3 className="text-xl font-bold text-white">
                Exploiting Next.js Middleware Authorization Bypass (CVE-2025–29927)
              </h3>
              <p className="text-gray-400 text-sm mb-2">April 4, 2025</p>
              <p className="text-gray-300 mb-4">
                A deep dive into a critical vulnerability in Next.js allowing attackers to bypass middleware-based authorization checks.
              </p>
              <a
                href="https://medium.com/@fahimalshihabifty/exploiting-next-js-middleware-authorization-bypass-cve-2025-29927-a-deep-dive-60ac59183f44"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button variant="outline">Read More</Button>
              </a>
            </CardContent>
          </Card>
        </section>
      </section>
    </main>
  );
}
