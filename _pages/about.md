---
permalink: /
title: ""
excerpt: ""
author_profile: true
redirect_from: 
  - /about/
  - /about.html
---

<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css">

{% if site.google_scholar_stats_use_cdn %}
{% assign gsDataBaseUrl = "https://cdn.jsdelivr.net/gh/" | append: site.repository | append: "@" %}
{% else %}
{% assign gsDataBaseUrl = "https://raw.githubusercontent.com/" | append: site.repository | append: "/" %}
{% endif %}
{% assign url = gsDataBaseUrl | append: "google-scholar-stats/gs_data_shieldsio.json" %}

<div class="anchor" id="about-me"></div>

<section class="home-hero">
  <div class="home-hero__eyebrow"><span></span> Efficient Generative AI · MLSys</div>
  <p class="home-hero__intro">I am an M.Phil. student at <span class="about-highlight">HKUST(GZ)</span>, advised by <a href="https://sites.google.com/view/zeke-xie">Prof. Zeke Xie</a>. I am currently a research intern at <a href="https://research.nvidia.com/labs/eai/">NVIDIA Research</a> supervised by <a href="https://xieenze.github.io/">Enze Xie</a>. I was previously a visiting student at <span class="about-highlight">Westlake University</span>, advised by <a href="https://huanwang.tech">Prof. Huan Wang</a>. My research focuses on <span class="about-highlight">Efficient Generative AI</span> and <span class="about-highlight">MLSys</span>.</p>
</section>


<span class='anchor' id='-news'></span>


<!-- <span class='anchor' id='-internships'></span>
# Experiences

- *2026.02 - 2026.04*: &nbsp;Intern, **ByteDance**.
- *2024.07 - 2024.12*: &nbsp;Intern, **Huawei 2012 Lab**. -->


<span class='anchor' id='-publications'></span>
# Publications 

<div class="publication-list">

<div class='paper-box floating-card'>
  <div class='paper-box-image'>
    <div class="badge pulse-accent" style="text-transform: none;">Technical Report</div>
    <img src='images/titlepage_sol_attn.png' alt="Sol-Attn overview" width="100%">
  </div>
  <div class='paper-box-text'>
    <h3>Sol-Attn: Accelerating Video Generation Inference via On-the-Fly Attention Sparsification</h3>
    <div class="authors"><span class="accent-text">Haopeng Li</span>, Yitong Li, Junsong Chen, Tian Ye, Haozhe Liu, Jincheng Yu, Duomin Wang, Ruihua Zhang, Zeke Xie, Enze Xie, Song Han</div>
    <div class="venue">Technical Report</div>
    <div class="links">
      <a href="https://arxiv.org/abs/2607.24027" class="btn-accent"><i class="fas fa-file-alt"></i> ArXiv</a>
      <a href="https://nvlabs.github.io/Sana/Sol-Attn/" class="btn-accent"><i class="fas fa-globe"></i> Website</a>
      <a href="https://github.com/NVlabs/Sana/tree/sol-engine" class="btn-accent"><i class="fab fa-github"></i> Code</a>
    </div>
  </div>
</div>

<div class='paper-box floating-card'>
  <div class='paper-box-image'>
    <div class="badge pulse-accent" style="text-transform: none;">Technical Report</div>
    <img src='images/titlepage_sol.png' alt="Sol Video Inference Engine" width="100%">
  </div>
  <div class='paper-box-text'>
    <h3>Sol Video Inference Engine: Agent-Native Full-Stack Acceleration Framework for Efficient Video Generation</h3>
    <div class="authors">Yitong Li, Junsong Chen, <span class="accent-text">Haopeng Li</span>, Haozhe Liu, Jincheng Yu, Ligeng Zhu, Ping Luo, Song Han, Enze Xie</div>
    <div class="venue">Technical Report</div>
    <div class="links">
      <a href="https://arxiv.org/abs/2606.23743" class="btn-accent"><i class="fas fa-file-alt"></i> ArXiv</a>
      <a href="https://github.com/NVlabs/Sana/tree/sol-engine" class="btn-accent"><i class="fab fa-github"></i> Code</a>
    </div>
  </div>
</div>

<div class='paper-box floating-card'>
  <div class='paper-box-image'>
    <div class="badge pulse-accent">Preprint</div>
    <img src='images/titlepage_pisa.jpg' alt="PISA Overview" width="100%">
  </div>
  <div class='paper-box-text'>
    <h3>PISA: Piecewise Sparse Attention Is Wiser for Efficient Diffusion Transformers</h3>
    <div class="authors"><span class="accent-text">Haopeng Li</span>, Shitong Shao, Wenliang Zhong, Zikai Zhou, Lichen Bai, Hui Xiong, Zeke Xie</div>
    <div class="venue">Under Review</div>
    <div class="links">
      <a href="https://arxiv.org/abs/2602.01077" class="btn-accent"><i class="fas fa-file-alt"></i> ArXiv</a>
      <a href="https://github.com/xie-lab-ml/piecewise-sparse-attention" class="btn-accent"><i class="fab fa-github"></i> Code</a>
    </div>
  </div>
</div>

<div class='paper-box floating-card'>
  <div class='paper-box-image'>
    <div class="badge pulse-accent">ICLR 2026</div>
    <img src='ARPG/assets/overview.png' alt="ARPG Architecture" width="100%">
  </div>
  <div class='paper-box-text'>
    <h3>Autoregressive Image Generation with Randomized Parallel Decoding</h3>
    <div class="authors"><span class="accent-text">Haopeng Li</span>, Jinyue Yang, Guoqi Li, Huan Wang</div>
    <div class="venue">ICLR 2026</div>
    <div class="links">
      <a href="https://arxiv.org/abs/2503.10568" class="btn-accent"><i class="fas fa-file-alt"></i> Paper</a>
      <a href="/ARPG/" class="btn-accent"><i class="fas fa-globe"></i> Website</a>
      <a href="https://github.com/hp-l33/ARPG" class="btn-accent"><i class="fab fa-github"></i> Code</a>
    </div>
  </div>
</div>

<div class='paper-box floating-card'>
  <div class='paper-box-image'>
    <div class="badge pulse-accent" style="text-transform: none;">Technical Report</div>
    <img src='images/titlepage_mainecoon.png' alt="MaineCoon" width="100%">
  </div>
  <div class='paper-box-text'>
    <h3>MaineCoon: Pursuing A Real-Time Audio-Visual Social World Model</h3>
    <div class="authors">Catnip AI Team (including <span class="accent-text">Haopeng Li</span>)</div>
    <div class="venue">Technical Report</div>
    <div class="links">
      <a href="https://arxiv.org/abs/2606.17800" class="btn-accent"><i class="fas fa-file-alt"></i> ArXiv</a>
      <a href="https://github.com/catnip-ai-tech/MaineCoon" class="btn-accent"><i class="fab fa-github"></i> Code</a>
    </div>
  </div>
</div>

<div class='paper-box floating-card'>
  <div class='paper-box-image'>
    <div class="badge pulse-accent">ICML 2026</div>
    <img src='images/titlepage_live.png' alt="LIVE Overview" width="100%">
  </div>
  <div class='paper-box-text'>
    <h3>LIVEditor-14B: Lightning Unified Video Editing via In-Context Sparse Attention</h3>
    <div class="authors">Shitong Shao, Zikai Zhou, <span class="accent-text">Haopeng Li</span>, Yingwei Song, Wenliang Zhong, Lichen Bai, Zeke Xie</div>
    <div class="venue">ICML 2026</div>
    <div class="links">
      <a href="https://arxiv.org/abs/2605.04569" class="btn-accent"><i class="fas fa-file-alt"></i> ArXiv</a>
      <a href="https://github.com/xie-lab-ml/LIVEditor/tree/main" class="btn-accent"><i class="fab fa-github"></i> Code</a>
    </div>
  </div>
</div>

<div class='paper-box floating-card'>
  <div class='paper-box-image'>
    <div class="badge pulse-accent">Preprint</div>
    <img src='images/titlepage_aim.png' alt="LIVE Overview" width="100%">
  </div>
  <div class='paper-box-text'>
    <h3>Scalable Autoregressive Image Generation with Mamba</h3>
    <div class="authors"><span class="accent-text">Haopeng Li</span>, Jinyue Yang, Kexin Wang, Xuerui Qiu, Yuhong Chou, Xin Li, Guoqi Li</div>
    <div class="venue">Preprint</div>
    <div class="links">
      <a href="https://arxiv.org/abs/2408.12245" class="btn-accent"><i class="fas fa-file-alt"></i> ArXiv</a>
      <a href="https://github.com/hp-l33/AiM" class="btn-accent"><i class="fab fa-github"></i> Code</a>
    </div>
  </div>
</div>

<div class='paper-box floating-card'>
  <div class='paper-box-image'>
    <div class="badge pulse-accent" style="text-transform: none;">NeurIPS 2024</div>
    <img src='images/titlepage_graph.png' alt="LIVE Overview" width="100%">
  </div>
  <div class='paper-box-text'>
    <h3>Can Large Language Models Analyze Graphs like Professionals? A Benchmark, Datasets and Models</h3>
    <div class="authors">Xin Li, Weize Chen, Qizhi Chu, <span class="accent-text">Haopeng Li</span>, Zhaojun Sun, Ran Li, Chen Qian, Yiwei Wei, Zhiyuan Liu, Chuan Shi, Maosong Sun, Cheng Yang</div>
    <div class="venue">NeurIPS 2024</div>
    <div class="links">
      <a href="https://proceedings.neurips.cc/paper_files/paper/2024/hash/ff417c3993894694e88ffc4d3f53d28b-Abstract-Datasets_and_Benchmarks_Track.html" class="btn-accent"><i class="fas fa-file-alt"></i> Paper</a>
      <a href="https://github.com/BUPT-GAMMA/ProGraph" class="btn-accent"><i class="fab fa-github"></i> Code</a>
    </div>
  </div>
</div>

</div>

<span class='anchor' id='-projects'></span>
# Projects

<div class="publication-list project-list">

<div class='paper-box floating-card'>
  <div class='paper-box-image'>
    <div class="badge pulse-accent" style="text-transform: none;">FLA</div>
    <img src='images/titlepage_fbla.png' alt="Flash Bidirectional Linear Attention" width="100%">
  </div>
  <div class='paper-box-text'>
    <h3>Flash Bidirectional Linear Attention</h3>
    <div class="authors"><span class="accent-text">Haopeng Li</span> · A Triton-based library for efficient implementations of bidirectional linear attention.</div>
    <div class="venue">Open Source</div>
    <div class="links">
      <a href="https://github.com/fla-org/flash-bidirectional-linear-attention" class="btn-accent"><i class="fab fa-github"></i> Code</a>
    </div>
  </div>
</div>

</div>

<span class='anchor' id='-awards'></span>
# Awards

<div class="award-list">
  <div class="award-item">
    <span class="award-date">2025.09</span>
    <span class="award-detail"><strong>Postgraduate Studentship</strong><span>HKUST(GZ)</span></span>
  </div>
  <div class="award-item">
    <span class="award-date">2021.10</span>
    <span class="award-detail"><strong>National Scholarship</strong><span>Ministry of Education</span></span>
  </div>
</div>
