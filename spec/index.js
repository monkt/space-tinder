setTimeout(function() {

  describe('ATtinder', function() {

    var $tinder = $('.content.tinder');
    var image = $tinder.find('img');

    it('has content', function() {
      expect($tinder).to.not.equal(null);
    });

    it('contains one image', function() {
      expect(image.length).to.equal(1);
    });

    it('changes the image after like', function() {
      var src = image[0].src;
      $tinder.find('.like').trigger('click');
      newSrc = $('.content.tinder').find('img')[0].src
      expect(src).to.not.equal(newSrc);
    });
  });

  mocha.run();

}, 3000);
