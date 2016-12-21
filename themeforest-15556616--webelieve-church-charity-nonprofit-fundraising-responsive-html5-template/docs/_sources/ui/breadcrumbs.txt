Breadcrumbs
===========

.. image:: ../img/breadcrumbs.png

Source
~~~~~~

Sass source are in ``template_src/src/assets/sass/block/breadcrumbs.sass``

Variations
~~~~~~~~~~

*
 Default html breadcrumbs

  .. code-block:: html

     <!-- BEGIN BREADCRUMBS-->
      <nav class="breadcrumbs">
        <div class="container">
          <ul>
            <li class="breadcrumbs__item"><a href="" class="breadcrumbs__link">Home</a></li>
            <li class="breadcrumbs__item"><a href="" class="breadcrumbs__link">Our sermons</a></li>
          </ul>
        </div>
      </nav>
      <!-- END BREADCRUMBS-->

*
  WP like

  .. code-block:: html

      <nav class="breadcrumbs breadcrumbs--dark">
        <ul class="breadcrumbs__list">
          <li class="home">
            <span>
              <a title="Go to Realtyspace." href="http://realtyspace.dev" class="home">Realtyspace</a>
            </span>
          </li>
          <li>
            <span>
              <a title="Go to Blog." href="http://realtyspace.dev/blog/">Blog</a>
            </span>
          </li>
          <li class="current_item">
            <span>
              <span>FAQ</span>
            </span>
          </li>
        </ul>

      </nav>