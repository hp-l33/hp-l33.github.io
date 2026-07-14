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

<span class='anchor' id='about-me'></span>

My name is <span class="accent-text">Haopeng Li</span>. I am an M.Phil. student at **HKUST(GZ)**, advised by Prof. <a href="https://sites.google.com/view/zeke-xie">Zeke Xie</a>. I am currently a research intern at [NVIDIA Research](https://research.nvidia.com/labs/eai/) supervised by [Dr. Enze Xie](https://xieenze.github.io/) and [Prof. Song Han](https://hanlab.mit.edu/songhan). I was once very fortunate to be a visiting student at **Westlake University**, advised by Prof. <a href="https://huanwang.tech">Huan Wang</a>. My research focuses on <span class="primary-gradient-text">Efficient Generative AI</span> and <span class="primary-gradient-text">MLSys</span>.


<span class='anchor' id='-news'></span>


<!-- <span class='anchor' id='-internships'></span>
# Experiences

- *2026.02 - 2026.04*: &nbsp;Intern, **ByteDance**.
- *2024.07 - 2024.12*: &nbsp;Intern, **Huawei 2012 Lab**. -->


<span class='anchor' id='-publications'></span>
# Publications 

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
    <div class="badge pulse-accent">ICLR 2026</div>
    <img src='ARPG/assets/overview.png' alt="ARPG Architecture" width="100%">
  </div>
  <div class='paper-box-text'>
    <h3>Autoregressive Image Generation with Randomized Parallel Decoding</h3>
    <div class="authors"><span class="accent-text">Haopeng Li</span>, Jinyue Yang, Guoqi Li, Huan Wang</div>
    <div class="venue">The 14th International Conference on Learning Representations (ICLR 2026)</div>
    <div class="links">
      <a href="https://arxiv.org/abs/2503.10568" class="btn-accent"><i class="fas fa-file-alt"></i> Paper</a>
      <a href="/ARPG/" class="btn-accent"><i class="fas fa-globe"></i> Website</a>
      <a href="https://github.com/hp-l33/ARPG" class="btn-accent"><i class="fab fa-github"></i> Code</a>
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
    <div class="badge pulse-accent">ICML 2026</div>
    <img src='images/titlepage_live.png' alt="LIVE Overview" width="100%">
  </div>
  <div class='paper-box-text'>
    <h3>LIVEditor-14B: Lightning Unified Video Editing via In-Context Sparse Attention</h3>
    <div class="authors">Shitong Shao, Zikai Zhou, <span class="accent-text">Haopeng Li</span>, Yingwei Song, Wenliang Zhong, Lichen Bai, Zeke Xie</div>
    <div class="venue">The 43rd International Conference on Machine Learning (ICML 2026)</div>
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
    <div class="venue">The 38th Annual Conference on Neural Information Processing Systems (NeurIPS 2024)</div>
    <div class="links">
      <a href="https://proceedings.neurips.cc/paper_files/paper/2024/hash/ff417c3993894694e88ffc4d3f53d28b-Abstract-Datasets_and_Benchmarks_Track.html" class="btn-accent"><i class="fas fa-file-alt"></i> Paper</a>
      <a href="https://github.com/BUPT-GAMMA/ProGraph" class="btn-accent"><i class="fab fa-github"></i> Code</a>
    </div>
  </div>
</div>


<span class='anchor' id='-projects'></span>
# Projects

<div class='paper-box floating-card'>
  <div class='paper-box-image'>
    <div class="badge pulse-accent" style="text-transform: none;">FLA</div>
    <img src='images/titlepage_fbla.png' alt="LIVE Overview" width="100%">
  </div>
  <div class='paper-box-text'>
    <h3>Flash Bidirectional Linear Attention</h3>
    <div class="authors"><span class="accent-text">Haopeng Li</span></div>
    <div class="venue">A Triton-Based Library for Efficient Implementations of Bidirectional Linear Attention.</div>
    <div class="links">
      <a href="https://github.com/fla-org/flash-bidirectional-linear-attention" class="btn-accent"><i class="fab fa-github"></i> Code</a>
    </div>
  </div>
</div>


<span class='anchor' id='-awards'></span>
# Awards
- *2021.10*: &nbsp;**National Scholarship**, Ministry of Education
- *2025.09*: &nbsp;**Postgraduate Studentship**, HKUST(GZ)
