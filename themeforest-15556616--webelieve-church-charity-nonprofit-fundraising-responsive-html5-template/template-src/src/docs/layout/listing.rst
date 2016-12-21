Listing
=======

**Listing** is a special html wrapper, for listing items.

Source
~~~~~~

| Sass styles are in folder ``template_src/src/assets/sass/layout/listing.sass`` .

Variations
~~~~~~~~~~

The list of ``listings``:

*
    ``listing--list`` - design for **list** listings.

    .. image:: ../img/listing--list.png

*
    ``listing--grid`` - design for **grid** listings.

    .. image:: ../img/listing--grid.png
*
    ``listing--masonry`` - design for **masonry** listings.

    .. image:: ../img/listing--masonry.png


Example
-------

.. code-block:: html

    <div class="listing listing--grid">
      <div class="listing__item">
        <div class="event__item js-event-item">
          <...>
        </div>
      </div>
      <div class="listing__item">
        <div class="event__item js-event-item">
          <...>
        </div>
      </div>
    </div>


.. Note:: Add class ``js-isotope-grid`` on ``listing`` to make masonry layout.
