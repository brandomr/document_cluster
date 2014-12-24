Document Clustering with Python
================

<img src='header_short.jpg'>

In this guide, I will explain how to cluster a set of documents using Python. My motivating example is to identify the latent structures within the synopses of the top 100 films of all time (per an IMDB list). See <a href='http://www.brandonrose.org/top100'>the original post</a>for a more detailed discussion on the example. This guide covers:

<ul>
<li> tokenizing and stemming each synopsis
<li> transforming the corpus into vector space using <a href='http://en.wikipedia.org/wiki/Tf%E2%80%93idf'>tf-idf</a>
<li> calculating cosine distance between each document as a measure of similarity
<li> clustering the documents using the <a href='http://en.wikipedia.org/wiki/K-means_clustering'>k-means algorithm</a>
<li> using <a href='http://en.wikipedia.org/wiki/Multidimensional_scaling'>multidimensional scaling</a> to reduce dimensionality within the corpus
<li> plotting the clustering output using <a href='http://matplotlib.org/'>matplotlib</a> and <a href='http://mpld3.github.io/'>mpld3</a>
<li> conducting a hierarchical clustering on the corpus using <a href='http://en.wikipedia.org/wiki/Ward%27s_method'>Ward clustering</a>
<li> plotting a Ward dendrogram
<li> topic modeling using <a href='http://en.wikipedia.org/wiki/Latent_Dirichlet_allocation'>Latent Dirichlet Allocation (LDA)</a>
</ul>

The 'cluster_analysis' workbook is fully functional; the 'cluster_analysis_web' workbook has been trimmed down for the purpose of creating this walkthrough. Feel free to download the repo and use 'cluster_analysis' to step through the guide yourself.
