describe('helpers test (set up and tear down()', function(){
    beforeEach(function (){
        billAmtInput.value = 100;
        tipAmtInput.value = 20;

        submitPaymentInfo ();
    })

    it('should calculate the total bill amount on sumPaymentTotal()', function() {
        expect(sumPaymentTotal('billAmt')).toEqual(100);

        billAmtInput.value = 300;
        tipAmtInput.value = 10;

        submitPaymentInfo();

        expect(sumPaymentTotal('billAmt')).toEqual(400);
    })

    it('should calculate the total tip amount on sumPaymentTotal()', function() {
        expect(sumPaymentTotal('tipAmt')).toEqual(20);

        billAmtInput.value = 300;
        tipAmtInput.value = 10;

        submitPaymentInfo();

        expect(sumPaymentTotal('tipAmt')).toEqual(30);
    })


    it('should calculate the total tip percent on sumPaymentTotal()', function() {
        expect(sumPaymentTotal('tipPercent')).toEqual(20);

        billAmtInput.value = 100;
        tipAmtInput.value = 20;

        submitPaymentInfo();

        expect(sumPaymentTotal('tipPercent')).toEqual(40);
    })

    it('should convert the bill and tip amount into a tip percent on calculateTipPercent()', function (){
        expect(calculateTipPercent(100,20)).toEqual(20);
        expect(calculateTipPercent(200,40)).toEqual(20);
    })

    it('should generate new td from value and append to tr on appendTd(tr, value)', function () {
        let newTr = document.createElement('tr');
    
        appendTd(newTr, 'test');
    
        expect(newTr.children.length).toEqual(1);
        expect(newTr.firstChild.innerHTML).toEqual('test');
      });
    
      it('should generate delete td and append to tr on appendDeleteBtn(tr, type)', function () {
        let newTr = document.createElement('tr');
    
        appendDeleteBtn(newTr);
    
        expect(newTr.children.length).toEqual(1);
        expect(newTr.firstChild.innerHTML).toEqual('X');
      });
    
      afterEach(function() {
        billAmtInput.value = '';
        tipAmtInput.value = '';
        paymentTbody.innerHTML = '';
        summaryTds[0].innerHTML = '';
        summaryTds[1].innerHTML = '';
        summaryTds[2].innerHTML = '';
        serverTbody.innerHTML = '';
        allPayments = {};
        paymentId = 0;
      });
    });

