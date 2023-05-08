---
title: Master Thesis: Flow predictions using control-oriented cluster-based network modeling
emoji: 📚
---

# Overview
This is the web verison of my master thesis - the title of the master thesis is: Flow predictions using control-oriented cluster-based network modeling.
The used license is: [![Hippocratic License HL3-BDS-CL-ECO-EXTR-MEDIA-MIL-SV-XUAR](https://img.shields.io/static/v1?label=Hippocratic%20License&message=HL3-BDS-CL-ECO-EXTR-MEDIA-MIL-SV-XUAR&labelColor=5e2751&color=bc8c3d)](https://firstdonoharm.dev/version/3/0/bds-cl-eco-extr-media-mil-sv-xuar.html)


# Abstract 

In this master thesis, a data-driven modeling technique is proposed. 
It enables making predictions for general dynamic systems for unknown model parameter values or operating conditions.
The tool is denoted as \gls{cnmc}.
The most recent developed version delivered promising results for the chaotic Lorenz system [@lorenz1963deterministic].
Since, the earlier work was restricted to the application of only one dynamical system, with this contribution the first major improvement was to allow \gls{cnmc} to be utilized for any general dynamical system. 
For this, \gls{cnmc} was written from scratch in a modular manner. 
The limitation of the number of the dimension and the shape of the trajectory of the dynamical systems are removed.
Adding a new dynamic system was designed such that it should be as straightforward as possible. 
To affirm this point, 10 dynamic systems, most of which are chaotic systems, are included by default. 
To be able to run \gls{cnmc} on arbitrary dynamic systems in an automated way, a parameter study for the modal decomposition method \gls{nmf} was implemented.
However, since a single \gls{nmf} solution took up to hours, a second option was added, i.e., \gls{svd}. 
With \gls{svd} the most time-consuming task could be brought to a level of seconds.
The improvements introduced, allow \gls{cnmc} to be executed on a general dynamic system on a normal computer in a reasonable time. 
Furthermore, \gls{cnmc} comes with its integrated post-processor in form of HTML files to inspect the generated plots in detail.
All the parameters used in \gls{cnmc} some additional beneficial features can be controlled via one settings file. 

