---
layout: home.html
---

## Uniform Polyhedra Modeled in [vZome](https://www.vzome.com/home).

All vZome designs were created by
[PlayfulMathematician](https://github.com/PlayfulMathematician).
Since they did not export preview JSON files,
either manually or using vZome's GitHub sharing automation,
some of the models load slowly.  For a similar reason, there
are no preview PNG images.

The website is an experiment created by [Scott Vorthmann](https://github.com/vorth), using the [11ty SSG](https://www.11ty.dev/).



<!-- The rest of this really should be generated also, just
     from the folders containing .vZome files. -->

### Regulars

<ul>
{% for item in collections.regulars %}
  <li><a href="{{ item.url | url }}">{{ item.data.title }}</a></li>
{% endfor %}
</ul>

### Truncates

<ul>
{% for item in collections.truncates %}
  <li><a href="{{ item.url | url }}">{{ item.data.title }}</a></li>
{% endfor %}
</ul>

### Omnitruncates

<ul>
{% for item in collections.omnitruncates %}
  <li><a href="{{ item.url | url }}">{{ item.data.title }}</a></li>
{% endfor %}
</ul>

### Quasiregulars

<ul>
{% for item in collections.quasiregulars %}
  <li><a href="{{ item.url | url }}">{{ item.data.title }}</a></li>
{% endfor %}
</ul>

### Snubifications

<ul>
{% for item in collections.snubifications %}
  <li><a href="{{ item.url | url }}">{{ item.data.title }}</a></li>
{% endfor %}
</ul>

### Trapeziverts

<ul>
{% for item in collections.trapeziverts %}
  <li><a href="{{ item.url | url }}">{{ item.data.title }}</a></li>
{% endfor %}
</ul>
