# AI Governance Frameworks Research
**Created:** 2026-08-18 | **Phase:** Weeks 1–4 expertise building

---

## Executive Summary

Five frameworks dominate enterprise AI governance decisions. Customers face regulatory pressure (EU AI Act mandatory by Aug 2026), voluntary standards gaps, and internal chaos around risk management. Consultants help bridge the gap between regulatory requirements and operational reality.

---

## 1. Regulatory Frameworks (Mandatory)

### EU AI Act
[Live phased rollout through 2027; non-compliance fines up to €35M or 7% annual revenue](https://sprinto.com/blog/eu-ai-act-compliance/)

**Timeline:**
- Feb 2, 2025: Prohibited AI practices banned
- Aug 2, 2025: Transparency obligations + GPAI rules  
- Aug 2, 2026: High-risk AI full compliance deadline (the big one)
- Aug 2, 2027: Extends to Annex I regulated products

**Scope:** Applies extraterritorially—affects any AI provider/deployer if systems operate on EU market or outputs used in EU.

**Risk tiers:**
- **Prohibited:** Social scoring, real-time facial recognition in public spaces
- **High-risk:** Critical infrastructure, law enforcement, employment, education. Requires risk assessment, data quality, documentation, transparency, human oversight, accuracy testing
- **Limited-risk:** Transparency obligations (disclose AI use)
- **Minimal/no risk:** Unregulated

**Consulting entry point:** Customers deploying AI in regulated sectors (finance, healthcare, manufacturing) need urgent help mapping their systems to risk tiers and building compliance documentation by Aug 2026.

---

## 2. Voluntary Standards (Industry Best Practice)

### [NIST AI Risk Management Framework (AI RMF 1.0)](https://www.nist.gov/publications/artificial-intelligence-risk-management-framework-ai-rmf-10)
**Non-certifiable voluntary guidance** (Jan 2023). Developed by 240+ public/private/academic stakeholders.

**Core structure:** Four functions aligned with trustworthy AI:
- **Govern:** AI governance structure, roles, policies, ethics principles
- **Map:** Inventory AI systems, document intended/unintended impacts
- **Measure:** Test for bias, performance, accuracy, safety, fairness
- **Manage:** Monitor, incident response, continuous improvement

**Strength:** Use-case agnostic, non-sector specific, flexible for orgs of all sizes. Most widely adopted in US enterprises.

**Companion materials:** AI RMF Playbook, Roadmap, Crosswalks, sector perspectives (banking, healthcare, etc.).

### [ISO/IEC 42001 – AI Management Systems](https://advisera.com/articles/what-is-iso-42001/)
**Certifiable international standard** (Dec 2023). World's first AI management system standard.

**Covers:**
- Establishing and maintaining AI management systems
- Policy and objectives for AI
- Risk identification and treatment
- Bias, security, data privacy risk assessment
- Human oversight and accountability

**Unique advantage:** Third-party auditable certification. Organizations can claim ISO 42001 compliance to customers/regulators.

### [ISO/IEC 42005 – AI System Impact Assessment](https://prompt.security/blog/iso-iec-42001-42005-ai-governance)
**Non-certifiable methodology** (guidance document). Companion to ISO 42001.

**Purpose:** Structured process to assess intended/unintended effects of AI systems on individuals, groups, society.

**How they align:** ISO 42001 = "how we run our AI program" | ISO 42005 = "how we assess impact of each AI system"

### Other Notable Standards
- **OECD AI Principles** – 5 cross-national principles (human rights, transparency, fairness, security, accountability)
- **Singapore Model AI Governance Framework** – Governance approach aligned with AI RMF; used by ASEAN orgs

---

## 3. Core Components Enterprises Implement

[Based on enterprise best practices, 2026 deployment patterns]

### Governance Structure
- **Dedicated AI governance office/committee** with defined roles (Chief AI Officer, risk lead, ethics lead, technical lead)
- **Decision rights matrix** – who approves which AI systems, at what stage
- **AI ethics principles** – documented, enforceable standards (fairness, transparency, accountability, human oversight)

### Risk Management
- **AI system inventory** – catalog all AI in production + experimental
- **Risk assessment per system** – maps to regulatory tiers (EU high-risk, NIST impacts)
- **Bias and fairness testing** – baseline, ongoing monitoring
- **Data quality checks** – source, representativeness, completeness
- **Performance benchmarking** – accuracy, latency, reliability

### Compliance & Documentation
- **Policy library** – responsible AI use policies, data governance, third-party model usage
- **Audit trails** – model versions, approval workflows, training data lineage
- **Third-party model governance** – vetting LLMs, fine-tuned models from external providers

### Human Oversight
- **Model interpretability** – can human operators explain system decisions?
- **Escalation procedures** – when to override or pause AI system
- **AI literacy training** – teams deploying/using AI understand limitations

### Continuous Monitoring
- **Performance drift detection** – system accuracy degrades over time
- **Incident response** – how to handle bias detected in production
- **Regular audits** – internal and third-party reviews

---

## 4. Market Drivers & Customer Pain Points

### Why Enterprises Are Desperate for Help

**Regulatory pressure:** [EU AI Act Aug 2026 deadline is 1 year away. Organizations deploying high-risk AI systems are unprepared—42% shortfall between anticipated and actual AI deployments in 2024.](https://digital.nemko.com/insights/modern-ai-governance-frameworks-for-enterprise)

**Ungoverned AI sprawl:** Teams spin up generative AI pilots, fine-tuned models, third-party APIs without central oversight. No inventory. No risk assessment.

**Compliance fragmentation:** Large orgs with EU, US, UK, APAC operations face overlapping regs (EU AI Act, sector-specific rules, state laws). No single framework fits all.

**Agentic AI uncertainty:** [2025 focus is on agentic AI strategies—autonomous systems that take actions independently. Enterprises have no governance for this yet.](https://digital.nemko.com/insights/modern-ai-governance-frameworks-for-enterprise)

**Liability concerns:** Executives unsure: who's liable if our AI causes harm? What insurance covers this? How do we limit exposure?

### Customer Archetypes

**Large Enterprises (100–5000 employees):**
- Already have some AI governance, but it's ad-hoc or siloed
- Selling to EU or operating in regulated sectors → urgent EU AI Act compliance
- Need: holistic framework integrating NIST/ISO/EU requirements, board-level reporting
- Budget: $50–200K per engagement + retainers ($5–20K/month)

**Smaller Regulated Businesses (10–100 employees):**
- Minimal AI governance; execs don't know where to start
- Can't hire full-time Chief AI Officer
- Need: practical roadmap to compliance, templated policies, focused risk assessment
- Budget: $5–50K per engagement or $500–2K/month retainer

**Financial Services & Healthcare (High-risk sectors):**
- Heavily regulated already (SOX, HIPAA, GDPR); adding AI governance is existential
- Regulators increasingly asking: how do you govern your ML models?
- Need: frameworks that satisfy sector regulators + AI Act
- Budget: $100K+ engagement

---

## 5. Consulting Entry Points

### High-Value Engagements

**1. EU AI Act Compliance Audit** ($15–50K)
- Inventory their AI systems
- Map to EU risk tiers
- Identify compliance gaps
- Roadmap to Aug 2026 deadline

**2. AI Governance Framework Build** ($50–200K + retainer)
- Design governance structure (roles, policies, ethics principles)
- Implement NIST/ISO 42001 process
- Document risk assessment and audit trails
- Train teams

**3. Third-Party Model Governance** ($10–30K)
- Evaluate LLMs, fine-tuned models used by org
- Risk assessment (bias, data privacy, performance)
- Policy for acceptable third-party models
- Ongoing monitoring setup

**4. High-Risk AI System Assessment** ($25–75K per system)
- Deep-dive risk analysis on flagship AI application
- Bias testing, interpretability analysis
- Compliance against regulations (EU, sector-specific)
- Remediation roadmap

**5. Retainer Model** ($500–5K/month)
- Ongoing AI governance support
- New system reviews
- Regulatory updates
- Team coaching

### Thought Leadership Angles (Weeks 5–8)

1. **"The Aug 2026 EU AI Act Compliance Panic: What Your Exec Team Should Do Now"** 
   - Urgent, timely, positions you as the advisor on regulatory readiness

2. **"Stop Building AI Without Governance: A Practical Framework for Enterprise Leaders"**
   - Bridge between NIST/ISO theory and actual implementation challenges

3. **"The AI Governance Maturity Curve: Where Most Enterprises Fail (And How to Fix It)"**
   - Maps real orgs against frameworks; shows typical pitfalls

4. **"Agentic AI and Governance: Why Traditional Risk Frameworks Aren't Enough"**
   - 2025 trend; position early expertise

---

## 6. Key Takeaways for Your 3-Month Proof-of-Concept

### What You Need to Know
1. **NIST AI RMF 1.0** is the most flexible, widely adopted US framework. Start here to understand the governance "baseline."
2. **ISO 42001** is the certifiable standard gaining traction with enterprises seeking formal compliance credentials.
3. **EU AI Act** is the regulatory sword hanging over enterprises' heads. Expertise here = immediate sales credibility.
4. Enterprises are confused, under-resourced, and facing real deadlines. This is a genuine market problem.
5. Governance work is detail-oriented (compliance, audit trails, documentation, policy) and regulatory-focused (meeting requirements). Test if you enjoy this.

### Validation Questions for End of 3 Months
- Do you enjoy digging into regulatory requirements and translating them for executives?
- Can you help an enterprise go from chaos (no AI inventory) → governance (structured policies, risk assessment)?
- Do you want to spend time on compliance documentation and third-party audits, or does it drain you?

If yes to all → scale. If energy drops midway → kill it.

---

## Sources & Further Reading

- [NIST AI RMF 1.0 Official Publication](https://www.nist.gov/publications/artificial-intelligence-risk-management-framework-ai-rmf-10)
- [Databricks: Practical AI Governance Framework for Enterprises](https://www.databricks.com/blog/practical-ai-governance-framework-enterprises)
- [EU AI Act Compliance Guide 2025–2027](https://quantamixsolutions.com/insights/eu-ai-act-compliance-guide/)
- [ISO 42001 Essentials](https://advisera.com/articles/what-is-iso-42001/)
- [AI Governance Frameworks 2025 (AI21 Overview)](https://www.ai21.com/knowledge/ai-governance-frameworks/)
