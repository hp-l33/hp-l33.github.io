---
layout: research-home
permalink: /
title: "Haopeng Li"
author_profile: false
redirect_from:
  - /about/
  - /about.html
---

<section class="profile-section" id="about-me" aria-label="About Haopeng Li">
  <div class="identity">
    <div class="identity-portrait">
      <img src="{{ site.author.avatar | relative_url }}" alt="Haopeng Li's knight avatar" width="460" height="460" fetchpriority="high">
    </div>
    <h1>{{ site.author.name }}</h1>
    <p class="identity-role">{{ site.author.bio }}</p>
    <div class="identity-links" aria-label="Contact and profiles">
      <a href="mailto:{{ site.author.email }}">Email <span aria-hidden="true">↗</span></a>
      <a href="https://github.com/{{ site.author.github }}">GitHub <span aria-hidden="true">↗</span></a>
      <a href="{{ site.author.googlescholar }}">Scholar <span aria-hidden="true">↗</span></a>
    </div>
  </div>
  <div class="about-panel">
    <div class="panel-heading"><span>01 / About me</span><span class="status-dot" aria-hidden="true"></span></div>
    <p>I am an M.Phil. student at <strong>HKUST(GZ)</strong>, advised by <a href="https://sites.google.com/view/zeke-xie">Prof. Zeke Xie</a>. I am currently a research intern at <a href="https://research.nvidia.com/labs/eai/">NVIDIA Research</a> supervised by <a href="https://xieenze.github.io/">Enze Xie</a>.</p>
    <p>I was previously a visiting student at <strong>Westlake University</strong>, advised by <a href="https://huanwang.tech">Prof. Huan Wang</a>.</p>
    <div class="research-focus">
      <span class="small-label">Research focus</span>
      <span>Efficient Generative AI <span class="focus-divider" aria-hidden="true">/</span> MLSys</span>
    </div>
  </div>
</section>

<section class="projects-section" id="-projects" aria-labelledby="projects-heading">
  <div class="section-heading">
    <div class="section-title"><span class="section-number">02</span><h2 id="projects-heading">Projects</h2></div>
    <span class="section-note">Open-source systems</span>
  </div>
  <div class="projects-list">
    {% for project in site.data.projects %}
    <article class="project-entry">
      <div class="project-logo"><img src="{{ project.logo | relative_url }}" alt="{{ project.logo_alt | escape }}" width="100" height="40" loading="lazy"></div>
      <span class="project-divider" aria-hidden="true"></span>
      <div class="project-name"><span class="project-org">{{ project.org }}</span><span class="project-slash" aria-hidden="true">/</span><a href="{{ project.url }}">{{ project.name }}</a></div>
      <div class="project-links">
        {% for link in project.links %}
        <a href="{{ link.url }}">{{ link.label }} <span aria-hidden="true">↗</span></a>
        {% endfor %}
      </div>
    </article>
    {% endfor %}
  </div>
</section>

<section class="publications-section" id="-publications" aria-labelledby="publications-heading">
  <div class="section-heading">
    <div class="section-title"><span class="section-number">03</span><h2 id="publications-heading">Publications</h2><span class="section-count">{% if site.data.publications.size < 10 %}0{% endif %}{{ site.data.publications.size }}</span></div>
    <nav class="paper-index" aria-label="Jump to a publication">
      {% for paper in site.data.publications %}
      <a href="#paper-{{ paper.id }}" aria-label="{{ paper.title | escape }}" title="{{ paper.title | escape }}"><span></span></a>
      {% endfor %}
    </nav>
  </div>
  <div class="papers-list">
    {% for paper in site.data.publications %}
    <article class="paper-entry" id="paper-{{ paper.id }}" aria-labelledby="title-{{ paper.id }}">
      <span class="paper-number" aria-hidden="true">{% if forloop.index < 10 %}0{% endif %}{{ forloop.index }}</span>
      <a class="paper-cover" href="{{ paper.links.first.url }}" aria-label="View {{ paper.title | escape }}">
        <img src="{{ paper.image | relative_url }}" alt="{{ paper.image_alt | escape }}" loading="lazy" width="500" height="310">
      </a>
      <div class="paper-content">
        <h3 id="title-{{ paper.id }}"><a href="{{ paper.links.first.url }}">{{ paper.title }}</a></h3>
        <p class="paper-authors">{% if paper.team %}{{ paper.team }} (including <strong>Haopeng Li</strong>){% else %}{% for author in paper.authors %}{% if author == site.author.name %}<strong>{{ author }}</strong>{% else %}{{ author }}{% endif %}{% unless forloop.last %}, {% endunless %}{% endfor %}{% endif %}</p>
        <div class="paper-resources">
          <span class="paper-venue">{{ paper.venue }}</span>
          <div class="paper-links" aria-label="Resources for {{ paper.title | escape }}">
            {% for link in paper.links %}
            <a href="{{ link.url }}">{{ link.label }} <span aria-hidden="true">↗</span></a>
            {% endfor %}
          </div>
        </div>
      </div>
    </article>
    {% endfor %}
  </div>
</section>

<section class="awards-section" id="-awards" aria-labelledby="awards-heading">
  <div class="section-heading">
    <div class="section-title"><span class="section-number">04</span><h2 id="awards-heading">Awards</h2></div>
    <span class="section-note">Honors &amp; support</span>
  </div>
  <div class="awards-list">
    <div class="award-entry"><span class="award-date">2025.09</span><span class="award-name">Postgraduate Studentship</span><span class="award-org">HKUST(GZ)</span></div>
    <div class="award-entry"><span class="award-date">2021.10</span><span class="award-name">National Scholarship</span><span class="award-org">Ministry of Education</span></div>
  </div>
</section>
