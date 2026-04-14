import { useState } from 'react';
import { motion } from 'framer-motion';
import { ExpandableCard } from '../components/marketing/ExpandableCard';
import './FeaturesPage.css';

export function FeaturesPage() {
  const [activeTab, setActiveTab] = useState('plots');

  const plotFeatures = [
    {
      title: '3D Polygon Terrain Map',
      summary: 'Load your actual GeoJSON plot boundaries...',
      content: 'Load your actual GeoJSON plot boundaries onto a true-to-site 3D terrain. Buyers rotate, zoom, and tap every plot for instant price, size, facing, road width and availability — all from their phone.'
    },
    {
      title: 'Live Availability Engine',
      summary: 'Plot status syncs the moment a transaction...',
      content: 'Plot status syncs the moment a transaction is recorded. Available, Sold, Reserved, Held — every device updates in real time. No manual refresh. No confusion. Sold is sold.'
    },
    {
      title: '360° Panoramic Views',
      summary: 'Upload equirectangular images for any plot...',
      content: 'Upload equirectangular images for any plot. Buyers get a full panoramic experience without leaving your website. Zero travel required for first impressions.'
    },
    {
      title: 'Drone View Integration',
      summary: 'Embed aerial video footage per plot...',
      content: 'Embed aerial video footage per plot. Give buyers the bird\'s-eye view that no physical site visit can match — especially for large layouts.'
    },
    {
      title: 'Plot Comparison Tool',
      summary: 'Buyers shortlist up to 3 plots...',
      content: 'Buyers shortlist up to 3 plots and compare side by side — size, price, facing, road width, monthly EMI — all in a clean comparison card. Faster decisions, fewer back-and-forth calls.'
    },
    {
      title: 'AI Sales Assistant',
      summary: 'Availability, pricing, RERA status...',
      content: 'Availability, pricing, RERA status, road width — answered instantly, 24/7. Reduces your sales team\'s load without losing the human touch.'
    }
  ];

  const flatsFeatures = [
    {
      title: 'Interactive Floor Plan Grid',
      summary: 'Upload your tower\'s floor plan...',
      content: 'Upload your tower\'s floor plan. Each unit becomes clickable — showing configuration, carpet area, floor, price and live status.'
    },
    {
      title: 'Tower View Navigation',
      summary: 'Visual tower elevation with floor selector...',
      content: 'Visual tower elevation with floor selector. Buyers navigate floor to floor, unit to unit. Natural, intuitive, no training needed.'
    },
    {
      title: 'Flat Comparison',
      summary: 'Compare up to 3 units side by side...',
      content: 'Compare up to 3 units side by side — BHK config, carpet area, floor, view direction, price and monthly EMI.'
    },
    {
      title: 'Virtual Unit Tour',
      summary: 'Link 360° walkthroughs to individual units...',
      content: 'Link 360° walkthroughs to individual flat units. Buyers virtually walk through their potential home before booking a site visit.'
    },
    {
      title: 'Configuration Filter',
      summary: 'Filter by 1BHK / 2BHK / 3BHK...',
      content: 'Filter by 1BHK / 2BHK / 3BHK, floor range, facing, price band and possession date — all real-time, no page reload.'
    },
    {
      title: 'Possession & Construction Updates',
      summary: 'Push milestone updates from admin...',
      content: 'Push milestone updates (slab cast, plumbing done, handover) from admin directly to buyers. Keep them informed. Reduce inbound calls.'
    }
  ];

  const adminFeatures = [
    {
      title: 'Lead Inbox',
      summary: 'Every enquiry captured through the buyer site...',
      content: 'Every enquiry captured through the buyer site lands here instantly. Name, phone, plot of interest, source (direct or broker referral). Assign stage: New → Contacted → Visit → Negotiation → Converted.'
    },
    {
      title: 'Client CRM',
      summary: 'Full booking lifecycle per client...',
      content: 'Full booking lifecycle per client — booking date, agreement signed, registration pending, registered. Document checklist: Booking Form, KYC, Agreement, Registration, Possession Letter.'
    },
    {
      title: 'Payment Ledger',
      summary: 'Record every payment...',
      content: 'Record every payment — amount, date, mode (cash/cheque/UPI/bank transfer), installment label. Auto-calculate paid vs outstanding. Generate PDF receipts.'
    },
    {
      title: 'Channel Partner Management',
      summary: 'Invite brokers via WhatsApp link...',
      content: 'Invite brokers via WhatsApp link. Approve or suspend accounts. See performance stats per partner. No spreadsheet needed.'
    },
    {
      title: 'Broadcasts',
      summary: 'Send mass messages to all leads or buyers...',
      content: 'Send mass messages to all leads or all buyers of a project. WhatsApp-ready templates. Announce price revisions, launch events, possession dates.'
    },
    {
      title: 'Project Updates',
      summary: 'Push construction and status milestones...',
      content: 'Push construction and status milestones that appear as notifications in the buyer\'s tracking portal. Proactive communication builds trust.'
    }
  ];

  const brokerFeatures = [
    {
      title: 'Branded Profile Page',
      summary: 'Every broker gets a public-facing profile...',
      content: 'Every broker gets a public-facing profile with their name, agency, designation and all listed projects. Shareable on WhatsApp and LinkedIn.'
    },
    {
      title: 'Trackable Referral Links',
      summary: 'Unique URLs per project with the broker\'s ref code...',
      content: 'Unique URLs per project with the broker\'s ref code. Every click and lead is automatically attributed. No disputes.'
    },
    {
      title: 'QR Code Generator',
      summary: 'Download print-ready QR codes...',
      content: 'Download print-ready QR codes for any scheme. Put them on hoardings, visiting cards, brochures. Scan → attributed lead.'
    },
    {
      title: 'Lead Pipeline',
      summary: 'See every lead generated...',
      content: 'See every lead generated, their current stage, and a CRM workflow to follow up. Masked phone on free tier, full reveal on premium.'
    },
    {
      title: 'Performance Analytics',
      summary: 'Link opens, unique visitors, total leads...',
      content: 'Link opens, unique visitors, total leads, conversion rate — all in one clean dashboard. Know which projects you\'re converting best.'
    },
    {
      title: 'AI Follow-up Drafts',
      summary: 'One-click WhatsApp message drafts...',
      content: 'One-click WhatsApp message drafts for each lead stage, generated by AI. Personalised, professional, instant.'
    }
  ];

  const tabs = [
    { id: 'plots', label: 'For Plots', features: plotFeatures },
    { id: 'flats', label: 'For Flats', features: flatsFeatures },
    { id: 'admin', label: 'Admin Panel', features: adminFeatures },
    { id: 'broker', label: 'Broker Portal', features: brokerFeatures }
  ];

  const currentTab = tabs.find(t => t.id === activeTab);

  return (
    <div className="features-page">
      <section className="section section-padding">
        <div className="container">
          <motion.div
            className="section-header text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="section-title">Everything your buyers need.</h1>
            <h1 className="section-title">Everything your team needs.</h1>
            <p className="section-subtitle">
              BrickBytes handles the entire property sales journey — from first impression to final registration. Here's how.
            </p>
          </motion.div>

          {/* Tab Navigation */}
          <div className="tab-navigation">
            {tabs.map((tab) => (
              <motion.button
                key={tab.id}
                className={`tab-button ${activeTab === tab.id ? 'active' : ''}`}
                onClick={() => setActiveTab(tab.id)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {tab.label}
              </motion.button>
            ))}
          </div>

          {/* Tab Content */}
          <motion.div
            className="tab-content"
            key={activeTab}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
          >
            <motion.h2
              className="tab-heading"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              {activeTab === 'plots' && 'Built for plotted developments.'}
              {activeTab === 'flats' && 'Purpose-built for apartment projects.'}
              {activeTab === 'admin' && 'Your command centre.'}
              {activeTab === 'broker' && 'A full CRM for every channel partner.'}
            </motion.h2>

            <div className="features-list">
              {currentTab?.features.map((feature, idx) => (
                <ExpandableCard key={idx} {...feature} index={idx} />
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
