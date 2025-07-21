import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Panel from './components/Panel';
import CodeBlock from './components/CodeBlock';
import Tooltip from './components/Tooltip';
import TypewriterText from './components/TypewriterText';
import './App.css';

const App: React.FC = () => {
  const techStack = ['React', 'Node', 'MongoDB', 'AWS', 'Vercel', 'Express.js', 'TypeScript'];

  const [isMobile, setIsMobile] = useState(false);

  // Check if mobile on mount and resize
  React.useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 767);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return (
    <div className="app">
      <div className="panels-container">
        {/* Panel 1: Dear AZDS */}
        <Panel 
          id="panel-1"
          className="letter-panel"
        >
          <motion.h1
            className="dear-azds-title"
            initial={{ opacity: 0, y: 50, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            whileHover={{ scale: 1.02 }}
          >
            <TypewriterText text="Dear AZDS," delay={100} />
          </motion.h1>
          <motion.div 
            className="letter-content"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.5 }}
          >
            <motion.p
              initial={{ opacity: 0, x: -30, y: 20 }}
              whileInView={{ opacity: 1, x: 0, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
              whileHover={{ x: 5 }}
            >
              This is a personal outreach — a gesture, and an invitation.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
            >
              As a tech nerd and car dealer, when I acquired <Tooltip content="This domain wasn't for sale. It was waiting for the right hands."><strong className="domain-mention">azds.ai</strong></Tooltip>, 
              I originally thought of it as "Arizona Dealer Services" — a simple, clean domain 
              for someday. I continuously have concept ideas — always buying domain names that I think have great potential.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.9 }}
            >
              When I discovered your company, I was impressed by the caliber of your team and the sophistication of your approach. 
              Your vision and execution align perfectly with what I've been striving to build.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 1.1 }}
            >
              This site is both a letter and a glimpse into who I am, what I've built, 
              and how I hope to contribute.
            </motion.p>
          </motion.div>
          <motion.div 
            className="scroll-prompt"
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 1.0, delay: 1.5, ease: "easeOut" }}
            whileHover={{ scale: 1.05, y: -2 }}
          >
            <span>
              {isMobile ? 'Scroll to begin reading the letter ↓' : 'Scroll to begin reading the letter →'}
            </span>
          </motion.div>
        </Panel>
        
        {/* Panel 2: Chapter 1 – The Origin Story */}
        <Panel 
          id="panel-2"
          className="letter-panel chapter-1"
        >

          <motion.h1
            className="origin-story-title"
            initial={{ opacity: 0, y: 30, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 1.2, delay: 0.2, ease: "easeOut" }}
            whileHover={{ scale: 1.02 }}
          >
            <TypewriterText text="The Origin Story" delay={80} />
          </motion.h1>
          <motion.div 
            className="letter-content"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              I grew up moving over a dozen times across diverse cultures, attending local schools in multiple languages. This international upbringing cultivated my deep appreciation for global business practices and hospitality excellence.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              I've always loved to build, design web applications, and sell. Sales energizes me, and I've spent years trying to find ways to blend these passions together. This combination of technical skills and sales experience has shaped my approach to everything I do.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.0 }}
            >
              Today, my wife and I operate a dealership in Phoenix, Arizona called <strong>AZ DLR LLC</strong>. It's a great environment to combine my love for building, designing, and selling, but I've always wanted something more — something I could do from anywhere in the world.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.2 }}
            >
              Cars are my passion, but they tie me down geographically.
            </motion.p>
          </motion.div>
          <motion.div 
            className="logo-container"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 1.4 }}
            whileHover={{ scale: 1.05 }}
          >
            <motion.img 
              src="/src/assets/azdlr.png" 
              alt="AZ DLR LLC" 
              className="azdlr-logo"
              whileHover={{ rotate: 5, scale: 1.1 }}
              transition={{ duration: 0.3 }}
            />
            
          </motion.div>
        </Panel>
        
        {/* Panel 3: Chapter 2 – What I've Been Building */}
        <Panel 
          id="panel-3"
          className="letter-panel chapter-2"
        >

          <motion.h1
            initial={{ opacity: 0, y: 30, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 1.2, delay: 0.2, ease: "easeOut" }}
            whileHover={{ scale: 1.02 }}
          >
            <TypewriterText text="What I've Been Building" delay={80} />
          </motion.h1>
          <motion.div 
            className="letter-content"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              Running our dealership, I've used several CRM and DMS tools available. They all felt heavy, 
              complex, and didn't deliver the clean, frictionless experience we needed.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              So I built my own. At <strong>azdlr.com</strong>, I created a cloud-based Dealer Management System 
              from the ground up — handling inventory, expenses, vehicle profiles, and sales reporting.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 1.0 }}
              whileHover={{ scale: 1.02 }}
            >
              <CodeBlock items={techStack} />
            </motion.div>
                        <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.2 }}
            >
              I still have lots to learn, but I recognize that building in the tech space and supporting businesses is where I want to be. I've learned to ship fast, iterate quickly, and solve real problems. I've gotten this far solo, but now I want to grow by learning from a team that builds at a higher level.
            </motion.p>
          </motion.div>
          
        </Panel>
        
        {/* Panel 4: Chapter 3 – Why AZDS Resonates With Me */}
        <Panel 
          id="panel-4"
          className="letter-panel chapter-3"
        >


          <motion.h1
            initial={{ opacity: 0, y: 30, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 1.2, delay: 0.4, ease: "easeOut" }}
            whileHover={{ scale: 1.02 }}
          >
            <TypewriterText text="Why AZDS Resonates With Me" delay={80} />
          </motion.h1>
          <motion.div 
            className="letter-content max-w-prose mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <motion.p
              className="text-base md:text-lg text-slate-700 leading-relaxed mt-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              What stands out to me about AZDS is the level of care behind everything you build. It's not just functional — it's considered. You create experiences that feel both intuitive and elevated.
            </motion.p>
            
            <motion.p
              className="text-base md:text-lg text-slate-700 leading-relaxed mt-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.0 }}
            >
              I've seen a lot of hotel systems. My wife works in hospitality as a regional revenue manager, so I've come across more booking engines, platforms, and hotel websites than I can count. But none of them feel like the work AZDS puts into the world.
            </motion.p>
            
            <motion.p
              className="text-base md:text-lg text-slate-700 leading-relaxed mt-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.2 }}
            >
              Your projects don't just look polished — they work with clarity. They feel like the result of people who care about the craft, not just the checklist.
            </motion.p>
            

          </motion.div>
        </Panel>
        
        {/* Panel 5: Chapter 4 – The Offer */}
        <Panel 
          id="panel-5"
          className="letter-panel chapter-4"
        >

          <motion.h1
            initial={{ opacity: 0, y: 30, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 1.2, delay: 0.2, ease: "easeOut" }}
            whileHover={{ scale: 1.02 }}
          >
            <TypewriterText text="The Offer" delay={80} />
          </motion.h1>
          
          {/* Domain Gift Section */}
          <motion.div 
            className="domain-card-container"
            initial={{ opacity: 0, y: 30, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 1.0, delay: 0.4, ease: "easeOut" }}
          >
            <motion.div 
              className="domain-card"
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
              whileHover={{ scale: 1.02, y: -5 }}
            >
              <Tooltip content="This domain isn't for sale. It was waiting for the right hands.">
                <h2 className="domain-title">azds.ai</h2>
              </Tooltip>
              <p className="domain-subtitle">
                This domain belongs with your team. I'm offering it freely.
              </p>
              <p className="domain-note">
                Transfer-ready. Yours, if you'd like it.
              </p>
            </motion.div>
          </motion.div>

          {/* Visual Divider */}
          <motion.hr 
            className="offer-divider"
            initial={{ opacity: 0, scaleX: 0 }}
            whileInView={{ opacity: 1, scaleX: 1 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          />

          {/* Personal Offer Section */}
          <motion.div 
            className="message-container"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.0 }}
          >
            <motion.h2
              className="message-heading"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.2 }}
            >
              <TypewriterText text="If there's a way to contribute..." delay={60} />
            </motion.h2>
            
            <motion.div 
              className="message-content"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.4 }}
            >
              <p className="message-paragraph">
                I don't say this with any expectations — just with appreciation for your work and team.
              </p>
              
              <p className="message-paragraph">
                I'd love the opportunity to contribute in some way. Not necessarily as a developer, but as someone who learns fast, adapts quickly, and understands how products and people fit together. I've worked across both front and back end, and I enjoy solving problems wherever I can be useful.
              </p>
              
              <p className="message-paragraph">
                What drives me isn't money — it's the chance to create things that matter. Great content, thoughtful products, and experiences people genuinely enjoy.
              </p>
              
              <p className="message-footer">
                However this lands, I'm thankful for the chance to learn from your work — and hopeful it might lead to something more.
              </p>
            </motion.div>
          </motion.div>

        </Panel>
        
        {/* Panel 6: Closing & Signature */}
        <Panel 
          id="panel-6"
          className="letter-panel chapter-5"
        >
          <motion.h1
            initial={{ opacity: 0, y: 30, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 1.2, delay: 0.2, ease: "easeOut" }}
            whileHover={{ scale: 1.02 }}
          >
            <TypewriterText text="Thank You" delay={80} />
          </motion.h1>

          <motion.div 
            className="letter-content"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              Thank you for taking the time to read this.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              Whether or not this leads anywhere, I'm grateful for what your work sparked in me — 
              the desire to build better, write with more care, and reach out to a team I genuinely admire.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="italic"
            >
              This letter, this site — it's all because something you made resonated.
            </motion.p>
          </motion.div>
          
          <motion.div 
            className="signature"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.0 }}
          >
            <motion.div 
              className="signature-name"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 1.2 }}
            >
              <TypewriterText 
                text="Carter Schilling" 
                delay={80}
                className="cursive-signature"
              />
            </motion.div>
            <motion.p 
              className="signature-title"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 1.4 }}
            >
              Founder, AZ DLR LLC
            </motion.p>
            <motion.p 
              className="signature-location"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 1.6 }}
            >
              Based in Arizona — open to new directions
            </motion.p>
          </motion.div>
          
          <motion.div 
            className="cta-container"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.8 }}
          >
            <motion.a 
              href="mailto:hello@azds.ai?subject=Domain%20Gift%20%2B%20Letter%20from%20Carter%20Schilling" 
              className="cta-button primary"
              whileHover={{ scale: 1.01, y: -2 }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.2 }}
            >
              Let's connect — about the domain, or something more →
            </motion.a>
          </motion.div>
          
          <motion.div 
            className="footer-links"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 2.0 }}
          >
            <motion.a 
              href="#" 
              className="footer-link"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 2.0 }}
            >
              See what else I've been building →
            </motion.a>
          </motion.div>
          
          <motion.div 
            className="ps-line"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 2.2, duration: 0.6 }}
          >
            <TypewriterText 
              text="P.S. My wife is a Colorado native and has been nudging me to move there for years. Working with a team like yours would make it an easy decision."
              delay={45}
            />
          </motion.div>
        </Panel>
      </div>
      </div>
  );
};

export default App;

