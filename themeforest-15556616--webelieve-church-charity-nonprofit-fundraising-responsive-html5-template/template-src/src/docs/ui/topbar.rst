Topbar
======

Source
~~~~~~


| Sass styles are in ``template_src/src/assets/sass/block/topbar.sass`` .
| Jade source are in ``template_src/src/jade/layout/topbar/*`` .


Variations
~~~~~~~~~~

There are 3 variations of toolbar (see outlined block):

1. ``topbar--v1``
    .. image:: ../img/header--v1.png

2. ``topbar--v2``
    .. image:: ../img/header--v2.png

3. ``topbar--v6``
    .. image:: ../img/header--v6.png



.. code-block:: html

      <!-- BEGIN topbar-->
      <div class="topbar js-topbar">
        <div class="container">
          <div class="topbar__row">
            <button class="header__menu header__menu--mob js-menu-btn"></button>
            <!-- BEGIN nav block-->
            <nav class="nav js-nav nav--v1">
              <!-- menu go here >
            </nav>
            <!-- END nav block--><a href="donate.html" class="btn--flat-rounded header__donate header__donate--v1">Donate</a>
          </div>
        </div>
      </div>
      <!-- END topbar-->
