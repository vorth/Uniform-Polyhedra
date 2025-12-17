---
layout: home.html
---

## Uniform Polyhedra modeled in [vZome](https://www.vzome.com/home).

<!-- {% for post in collections.all | reverse %}
  <div class="blog-title-card">
    <a href="{{ post.url }}">
      <img
        class="blog-title-card-image"
        src="/assets/{{ post.data.image }}"
        alt="{{ post.title }}"
      >
      <div class="blog-title-card-overlay">
        <div class="blog-title-card-text">
          {{ post.data.title }}
        </div>
      </div>
    </a>
  </div>
{% endfor %}
 -->

### Regulars

{% for item in collections.regulars %}
  <a href="{{ item.url }}">{{ item.data.title }}</a>
{% endfor %}

### Truncates

{% for item in collections.truncates %}
  <a href="{{ item.url }}">{{ item.data.title }}</a>
{% endfor %}

### Omnitruncates

{% for item in collections.omnitruncates %}
  <a href="{{ item.url }}">{{ item.data.title }}</a>
{% endfor %}

### Quasiregulars

{% for item in collections.quasiregulars %}
  <a href="{{ item.url }}">{{ item.data.title }}</a>
{% endfor %}

### Snubifications

{% for item in collections.snubifications %}
  <a href="{{ item.url }}">{{ item.data.title }}</a>
{% endfor %}

### Trapeziverts

{% for item in collections.trapeziverts %}
  <a href="{{ item.url }}">{{ item.data.title }}</a>
{% endfor %}
