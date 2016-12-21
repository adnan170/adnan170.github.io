Header
======

Variations
~~~~~~~~~~

| Webelieve has 6 header variations(menu inclusive).


Header variation 1
------------------

.. image:: ../img/header--v1.png

Header variation 2
------------------

.. image:: ../img/header--v2.png

Header variation 3
------------------

.. image:: ../img/header--v3.png

Header variation 4
------------------

.. image:: ../img/header--v4.png

Header variation 5
------------------

.. image:: ../img/header--v5.png

Header variation 6
------------------

.. image:: ../img/header--v6.png


F.A.Q.
------

.. contents::
    :local:
    :depth: 1

.. _change-logo:

...How I can change the logo?
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

You should have logo, in format svg/jpg/png. Find this code:

.. code-block:: html

    <a href="index.html" class="header__logo">
      <svg class="header__logo-svg">
        <use xlink:href="#icon-logo"></use>
      </svg>
    </a>

Save your file in ``assets/img``, then change code to something like this:

.. code-block:: html

    <!-- if you have svg file -->
    <a href="index.html" class="header__logo">
      <img src="img/logo.svg" class="header__logo-svg">
    </a>

    <!-- if you have png file -->
    <a href="index.html" class="header__logo">
      <img src="img/logo.png" class="header__logo-img">
    </a>

