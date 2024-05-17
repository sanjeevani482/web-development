# background-color: #48A30012;

## set the background color with the above property as only background will contaim many other properties.
## which will reset the other properties of the background which you have set before.

## font and test related thing will get inheritend from the parent to childern(99%) of the times.

# .goal-container{
    border: 1px solid black;
    border-radius: 17px;
    height: 82px;
    display: flex;
    align-items: center;
    padding: 0 22px;
# }
# .check-box{
    width: 24px;
    height: 24px;
    border: 2px solid grey;
    border-radius: 50%;
# }

 ### as shown above we can align check box and input fild at the center of a div, instead the above one we can use a similar approach, which is much more convinient for us.
 ## But usng flex is much more flexible

 # .goal-container{
    border: 1px solid black;
    border-radius: 17px;
    padding: 48px 22px;

# }
# .check-box{
    width: 24px;
    height: 24px;
    border: 2px solid grey;
    border-radius: 50%;
    display:inline-block;
    vertical-allign :middle;
# }

# in the input felid font -family will not inherit by default, in this case we need to explicitly mentione as then it will work.
## (because out browser will override the font-family which we set before)

##  font-family: inherit;


## we can als change the color of the placeholder using the below property/

## .goal-inp::placeholder{
    color: #D9D9D9;
# }

## meaing of the below onw will give margin to top and bottom.

  # margin-block: 20px;

## for making the input to take up all the apce in the conatiner we can use anyone of the below properties.

#  height: 100%; 
#  align-self: stretch;