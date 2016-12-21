Pagination
==========

.. image:: ../img/pagination.png

Source
~~~~~~

| Sass styles are in the file ``template_src/src/assets/sass/block/pagination.sass``
| Jade sources are in ``template_src/src/jade/partials/mixins/pagination.jade``

Usage
~~~~~

.. code-block:: html

  <!-- BEGIN PAGINATION-->
  <nav class="pagination">
    <a class="pagination__btn">
      <svg class="pagination__btn-svg">
        <use xlink:href="#icon-arrow-left"></use>
      </svg>
      <span class="pagination__btn-span"> Previous sermon</span>
    </a>
    <ul class="pagination__pages">
      <li><a href="#">1</a></li>
      <li class="active"><span>3</span></li>
      <li><a href="#">4</a></li>
      <li><span>...</span></li>
      <li><a href="#">15</a></li>
    </ul>
    <a class="pagination__btn">
      <span class="pagination__btn-span">Next sermon</span>
      <svg class="pagination__btn-svg">
        <use xlink:href="#icon-arrow-right"></use>
      </svg>
    </a>
  </nav>
  <!-- END PAGINATION-->




