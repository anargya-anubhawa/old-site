---
title: Redirect | Source Code
---

<p>The simplest way to redirect to another URL is to use an HTML <code>&lt;meta></code> tag with the http-equiv parameter set to “refresh”. The content attribute sets the delay before the browser redirects the user to the new web page. To redirect immediately, set this parameter to “0” seconds for the content attribute.</p>
<br>
<pre><code>
  &lt;meta http-equiv="Refresh" content="0; url='https://www.example.com'" />
  </code></pre>
<br>
<p>If you want your redirection to occur in an exact time, just specify your preferred parameter (in seconds) for the content. Let’s consider an example, where we set "7" seconds as redirection time.</p>
<br>
<pre><code>
  &lt;meta http-equiv="refresh" content="7; url='https://www.example.com'" />
  </code></pre>
<br>
<p>Some old browsers don't refresh correctly when you add a quick link. In that case, you can add an anchor link to let the user follow.</p>
<br>
<p id="green">Some browsers don't render the &lt;meta> refresh tag correctly, so before the next page loads, the user can see a flash as a page.</p>
<br>
<h2>Full code example</h2>
			        <pre><code id="code">
&lt;!DOCTYPE html>
&lt;html>
&lt;head>
   &lt;title>Example</title>
   &lt;meta name="viewport" content="width=device-width, initial-scale=1">
   &lt;meta http-equiv = "refresh" content = "2; url = https://anargya-anubhawa.github.io" />
&lt;/head>
&lt;body>
&lt;h1 align="center">Redirecting to Anargya Website...</h1>
&lt;P>https://anargya-anubhawa.github.io</p>
&lt;/body>
&lt;/html>
        </code></pre>
        <button style="background-color:#04AA6D; color:white; font-family: 'Source Sans Pro', sans-serif; font-size:18px; padding:6px 25px; margin-top:4px; border-radius:5px; border:1px solid #04AA6D;"><a style="text-decoration: none; color:white; font-weight: bold;" href="https://anargya-anubhawa.github.io/tryit/redirect.html">Try it</a></button>
        <script>hljs.highlightAll();</script>