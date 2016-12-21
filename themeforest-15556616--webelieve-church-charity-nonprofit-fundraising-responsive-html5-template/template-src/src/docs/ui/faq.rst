Faq
===

Overview
~~~~~~~~

Expandable plugin, provided by bootstrap, for more documentation and options look `here <http://getbootstrap.com/javascript/#collapse-example-accordion>`_

Source
~~~~~~

| Sass source are in ``template_src/src/assets/sass/widgets/faq.sass``
| Jade source are in folder ``template_src/jade/faq.jade``

Example
~~~~~~~

.. code-block:: html

    <!-- BEGIN FAQ-->
      <div role="tablist" aria-multiselectable="true" class="faq">
        <dl class="faq__item">
          <dt id="heading-0" role="tab" class="faq__title">
          <a data-toggle="collapse" data-parent="#accordion" href="#collapse-0" aria-expanded="true" aria-controls="collapse-0" class="faq__expander collapsed">What factors should one consider when trying to find a good local church?</a></dt>
          <dd id="collapse-0" role="tabpanel" aria-labelledby="heading-0" class="faq__content collapse">
            <div class="faq__body">
              <p>The mission of the church is to know and love Christ so supremely as to represent Him and His values accurately and vividly to the world and serve people’s deepest needs in the way Christ Himself would meet them. As W. C. Robinson says in Baker’s Dictionary of Theology, “Our Lord Jesus Christ is the sun about which the whole mission of the church revolves.</p>
            </div>
            <div class="faq__footer"><a data-toggle="collapse" data-parent="#accordion" href="#collapse-0" aria-controls="collapse-0" class="faq__close">Close</a></div>
          </dd>
        </dl>
        <!-- end of block .faq__item-->
        <dl class="faq__item">
          <dt id="heading-1" role="tab" class="faq__title">
          <a data-toggle="collapse" data-parent="#accordion" href="#collapse-1" aria-expanded="true" aria-controls="collapse-1" class="faq__expander collapsed">Do women have to remain silent in church?</a></dt>
          <dd id="collapse-1" role="tabpanel" aria-labelledby="heading-1" class="faq__content collapse">
            <div class="faq__body">
              <p>Public worship is the encounter of the risen Redeemer with His people; evangelism is calling men to the Savior; publishing the law of God is proclaiming His lordship; Christian nurture is feeding His lambs and disciplining His flock; ministering to the needs of men is continuing the work of the Great Physician.”</p>
            </div>
            <div class="faq__footer"><a data-toggle="collapse" data-parent="#accordion" href="#collapse-1" aria-controls="collapse-1" class="faq__close">Close</a></div>
          </dd>
        </dl>
        <!-- end of block .faq__item-->
        <!-- more items go here ... -->

      </div>
      <!-- END FAQ-->

.. Note:: Attributes ``id="heading-0"`` where ``0`` are in all controls, must be correlated, for this you can just increment it.