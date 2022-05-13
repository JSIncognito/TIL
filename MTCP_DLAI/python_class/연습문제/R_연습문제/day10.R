mydata<-read.csv("examscore.csv")
plot(mydata$midterm, mydata$final)

#c("red","blue")[as.factor(mydata$gender)]
#as.factor(mydata$gender)

# m<-c(40,45,50,60,80)
# #y=1*x+5
# f<-1*m+5
# f


with(mydata, 
     plot(midterm, final,
          xlab="중간",
          ylab="기말",
          pch=c(16,17)[as.factor(mydata$gender)],
          col=c("red","blue")[as.factor(mydata$gender)],
          main="점수"))
     legend(10,80,
            legend=c("여자","남자"),
            col=c("red","blue"),
            pch=c(16,17))

?legend     
     
#단순회귀모델(중간 -> 기말)     
lm(final~midterm, mydata)
     
#기울기 :  0.8967
#절편 : 13.8866
#기말점수 = 0.8967 * 중간점수 + 13.8866

m<-mydata$midterm
f<-mydata$final
#기울기 = 상관계수(중간,기말) * 표준편차(기말)/표준편차(중간)
slope<-cor(m,f) * sd(f) / sd(m) # 기울기 

#절편 =평균(기말) - 평균(중간) * 기울기
bias<-mean(f) - mean(m) * slope
bias

#중간고사 60점 -> 기말고사?
f_hat<-slope*60+bias
f_hat     
     
lm(final~midterm, mydata)

#lm(final~midterm+ascore+bscore, mydata)

#성별에 따른 회귀직선

mydata
data_male<-mydata[mydata$gender=='M',]  #남
data_female<-mydata[mydata$gender=='F',] #여

# data_male <- mydata %>% filter(mydata$gender == 'M')
# data_female <- mydata %>% filter(mydata$gender == 'F')

data_male

model1<-lm(final~midterm, data_male)
model2<-lm(final~midterm, data_female)

model1$coefficients
model2$coefficients


with(mydata, 
     plot(midterm, final,
          xlab="중간",
          ylab="기말",
          pch=c(16,17)[as.factor(mydata$gender)],
          col=c("red","blue")[as.factor(mydata$gender)],
          main="점수"))
legend(10,80,
       legend=c("여자","남자"),
       col=c("red","blue"),
       pch=c(16,17))

abline(model1$coefficients, col="blue")
abline(model2$coefficients, col="red")

#여학생, 중간고사 55점 -> 기말고사 예상점?
predict(model2, data.frame(midterm=55))

model2$coefficients[2]*55+model2$coefficients[1]


#중간고사 + 성별 -> 기말고사 점수 예상
str(mydata)

model3<-lm(final~midterm+gender,mydata)
model3
#genderM은 Male은 1, female은 0

#기말점수=0.8808*중간점수-6.6563*성별+18.9774 

c(0,1)[as.factor(mydata$gender)]

class(model3$coefficients)

par<-model3$coefficients
par[1]+par[2]*60+par[3]*1 #남학생, 중간고사 60점 => 기말:65.16

predict(model3, newdata = data.frame(midterm=60, gender='M'))



















