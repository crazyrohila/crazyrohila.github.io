---
layout: default
title: Articles
permalink: /articles/
---

<div class="container">
  <h1 class="page__title">{{ page.title }}</h1>
  <ul class="articles">
    {% for article in site.posts %}
      <li class="article__list">
        {% if article.external-url == "" or article.external-url == nil %}
          <a class="article__link" href="{{ article.url }}">
        {% else %}
          <a class="article__link" href="{{ article.external-url }}" target="_blank">
        {% endif %}
            {{ article.title }}
            <span class="article__date meta">
              {{ article.date | date_to_string }}
            </span>
            <i class="external icon-mail-forward meta"></i>
          </a>
      </li>
    {% endfor %}
  </ul>
  <hr></hr>
  <div class="social-links-wrapper">
    {% include footer.html %}
  </div>
</div>
