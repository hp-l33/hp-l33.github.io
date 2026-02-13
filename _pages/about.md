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

My name is <span class="accent-text">Haopeng Li</span>. I am a M.Phil. student at **HKUST(GZ)**, advised by Prof. <a href="https://sites.google.com/view/zeke-xie">Zeke Xie</a>. I was once very fortunate to be a visiting student at **Westlake University**, advised by Prof. <a href="https://huanwang.tech">Huan Wang</a>.


# <i class="fas fa-laptop-code"></i> Internships

- *2026.03 - Present*: &nbsp;AI Infra Intern, **ByteDance**.
- *2025.01 - 2025.07*: &nbsp;Visiting Student, **Westlake University**, advised by <a href="https://huanwang.tech" class="link-accent">Prof. Huan Wang</a>.
- *2025.01 - 2025.07*: &nbsp;AI Infra Intern, **Huawei 2012 Lab**.


# <i class="fas fa-file-alt"></i> Publications 

<div class='paper-box floating-card'>
  <div class='paper-box-image'>
    <div class="badge pulse-accent">Under Review</div>
    <img src='images/titlepage_arpg.png' alt="ARPG Architecture" width="100%">
  </div>
  <div class='paper-box-text'>
    <h3>Autoregressive Image Generation with Randomized Parallel Decoding</h3>
    <div class="authors"><strong>Haopeng Li</strong>, Jinyue Yang, Guoqi Li, Huan Wang</div>
    <div class="venue">ICLR 2026</div>
    <div class="links">
      <a href="https://arxiv.org/abs/2503.10568" class="btn-accent"><i class="fas fa-file-alt"></i> Paper</a>
      <a href="https://github.com/hp-l33/ARPG" class="btn-accent"><i class="fab fa-github"></i> Code</a>
    </div>
  </div>
</div>

<div class='paper-box floating-card'>
  <div class='paper-box-image'>
    <div class="badge pulse-accent">Preprint</div>
    <img src='images/titlepage_pisa.png' alt="PISA Overview" width="100%">
  </div>
  <div class='paper-box-text'>
    <h3>PISA: Piecewise Sparse Attention Is Wiser for Efficient Diffusion Transformers</h3>
    <div class="authors"><strong>Haopeng Li</strong>, Shitong Shao, Wenliang Zhong, Zikai Zhou, Lichen Bai, Hui Xiong, Zeke Xie</div>
    <div class="venue">Under Review</div>
    <div class="links">
      <a href="https://arxiv.org/abs/2602.01077" class="btn-accent"><i class="fas fa-file-alt"></i> ArXiv</a>
      <a href="https://github.com/xie-lab-ml/piecewise-sparse-attention" class="btn-accent"><i class="fab fa-github"></i> Code</a>
    </div>
  </div>
</div>
