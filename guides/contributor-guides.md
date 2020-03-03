{% assign guides = site.guides | sort:"order" %}

{% for guide in guides %}

{% unless guide.header == page.header %}

- [{{ guide.header }}]({{ guide.url }})

{% endunless %}

{% endfor %}
