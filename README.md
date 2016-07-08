# email-template-editor
Edit your email template with zero inline css, You can also define and review your email template before send.

## How it works
Work with inline css in html file just like a nightmare. 
When use ETE, you will build your email templates on **html** and **css** files as we did with frontend.
ETE will combine to inline css template.
By the way, ETE will render a viewable file (in **rendered**) with faked data (defined in **data.json**)
so you can see how it looks.


## django
This part is build to work fine with django template engine (and any
engine that has syntaxes same as django template engine) (`{{ show_value }}` 
and `{% if condition %}Do something{% endif %}` and `{{ object.value|filter }}`)

[Read more how to use](https://github.com/phuong/email-template-editor/blob/master/django/README.md)


## todo
- Use SASS to compile
- Apply for other template engines
- Prepare for other frameworks
  
