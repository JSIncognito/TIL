#거리행렬

a<-matrix(rnorm(100), nrow=5) #5행 20열
#5건 데이터, 20차원

plot(hclust(dist(a), method = "single"))
#single: 최단거리
#complete: 최장거리
#average:평균
plot(hclust(dist(a), method = "complete"))

plot(hclust(dist(a), method = "average"))

install.packages("mlbench")
library(mlbench)
data(Glass)
Glass

mydata<-Glass

head(Glass,5)

table(Glass$Type)

s_data<-scale(mydata[,-10])
s_data
hc<-hclust(dist(s_data), method='average')
plot(hc, hang=-1)

#7개 클러스터로 나눌 경우
rect.hclust(hc, k=7, border='blue')

#최적의 클러스터 개수를 구함
install.packages("fpc")
library(fpc)

opt_clust<-numeric(20)
opt_clust

library(cluster)

#k는 클러스터의 개수
for(k in 2:20){
  opt_clust[k]<-cluster::pam(s_data,k)$silinfo$avg.width
}

max(opt_clust) #0.4112153
best_num<-which.max(opt_clust) #2

#print("최적의 클러스터 개수 : ", best_num)
cat("최적의 클러스터 개수 : ", best_num)



#실루엣 값(0~1) : 
2 -> 0.4112153
3 -> 0.2501838
...
20 -> 0.2160421
#실루엣 값이 1에 가까울수록 클러스터링 잘됨


#kmeans 클러스터링 - 엘보우 그래프
library(ggplot2)
iris
str(iris)
irisScale=scale(iris[,-5])
irisScale

ggplot(iris, aes(x=Sepal.Length, y=Sepal.Width, col=Species))+
  geom_point()


ggplot(iris, aes(x=Petal.Length, y=Petal.Width, col=Species))+
  geom_point()

kmax<-10
wss<-rep(NA, kmax)
wss
rclust<-list()

for(i in 1:kmax){
  irisCluster<-kmeans(irisScale, i)
  wss[i]<-irisCluster$tot.withinss
  print(irisCluster$size)
  #withinss:클러스터 내의 데이터 사이 거리 제곱 합 벡터
  #tot.withinss : withinss의 총합
  rclust[[i]]=irisCluster$size
}
rclust

plot(1:kmax, wss, type='b')

res<-kmeans(irisScale, 3)
str(res)

plot(iris, col=res$cluster)

iris$Species
res$cluster

table(Predicted=res$cluster, Actual=iris$Species)

iris$Species
res$cluster

125/150



knn : k개 이웃을 참조 -> 관심 대상 데이터의 예측

# 국 영 수 합/불
# 50 50 50 불
# 90 90 90 합
# ...
# 
# 100 100 100 ???
#   ex) k가 3이라면, 가장 가까운 3명의 데이터 검색(유클리디안 거리)
# -> 합/불 다수결? 합격 : 2, 불합격 : 1 => 합격 분류
# 
# 국 영 수 과
# 50 50 50 50
# 90 90 90 90
# ...
# 100 100 100 ???
#   ex) k가 3이라면, 가장 가까운 3명의 데이터 검색(유클리디안 거리)
# -> 과학점수? 3명 과학점수 -> 90, 95, 90 -> 92... => 예측
# 

#https://archive.ics.uci.edu/ml/datasets.php

wbcd<-read.csv("wisc_bc_data.csv")
str(wbcd)

wbcd<-wbcd[-1] #id열 제외
str(wbcd)
table(wbcd$diagnosis)

factor(wbcd$diagnosis) #factor:범주형
wbcd$diagnosis #문자형

factor(wbcd$diagnosis, labels = c("Benign", "Malignant"))

wbcd$diagnosis<-factor(wbcd$diagnosis, labels = c("Benign","Malignant"), levels=c("B", "M"))

#wbcd$diagnosis #문자형

#비율
prop.table(table(wbcd$diagnosis))

round(prop.table(table(wbcd$diagnosis))*100,1)

summary(wbcd)

summary(wbcd['radius_mean'])
summary(wbcd[c('radius_mean','area_mean', 'smoothness_mean')])


normalize<-function(x){
  return ((x-min(x))/(max(x)-min(x)))
}
normalize(c(1,2,3,4,5))
normalize(c(10,20,30,40,50))

head(wbcd,3)

wbcd_n<-as.data.frame(lapply(wbcd[2:31], normalize))

summary(wbcd_n)

# class(lapply(wbcd[2:31], normalize))
# 
# 벡터, 행렬, 리스트, 배열

str(wbcd_n)
nrow(wbcd_n)

1번~469번까지 데이터 -> knn 모델 생성
470번~569번까지 데이터를 -> knn 모델에 입력 -> 출력(예상되는 진단 결과)


# apply 함수 : 벡터, 행렬, 리스트, 데이터프레임 -> 함수 적용 -> 결과 도출
# 1)apply함수 : 행렬의 행 또는 열 방향 함수 적용
sum(1:10)

m<-matrix(1:9, ncol=3)
apply(m, 1, sum)
apply(m, 2, sum)
head(iris)
apply(iris[,1:4], 2, sum)
colSums(iris[,1:4])

#lapply(벡터/리스트, 함수)
myFunc<-function(x){
  x*2
}
myFunc(3)

res<-lapply(1:3, myFunc)
unlist(res)

lapply(1:3, function(x){ x * 2 })

lapply(iris[,1:4], sum)
as.data.frame(matrix(unlist(lapply(iris[,1:4], mean)),2))

sapply(): lapply와 거의 똑같음. 차이점은 결과가 벡터 또는 행렬로 나옴

lapply(iris[,1:4], mean)
sapply(iris[,1:4], mean)

tapply(): 그룹별로 연산하는 apply함수
tapply()

1:10
1:10 %% 2
1:10 %% 2 == 1

table(1:10 %% 2 == 1)

#ex) 1~10까지 수에 대해 짝수그룹/홀수그룹 각각의 합
x<-1:10
sum(x[x%%2==0])
sum(x[x%%2!=0])

tapply(1:10, x%%2==1, sum)
1 2 3 4 5 6 7 8 9 10
T F T F T F T F T F
x%%2==1

rep(1,10)

tapply(1:10, rep(1,10), sum)
1 2 3 4 5 6 7 8 9 10
1 1 1 1 1 1 1 1 1 1


#tapply
iris에서 Species 별로 Sepal.Length의 평균
tapply(iris$Sepal.Length,iris$Species,mean)


wbcd_train_labels<-wbcd[1:469, 1] #knn 모델 생성 과정 사용 데이터
wbcd_test_labels<-wbcd[470:569, 1] # 모델 테스트 사용 데이터
knn()

wbcd_train<-wbcd_n[1:469,]
wbcd_test<-wbcd_n[470:569,]

library(class)

pred<-knn(train=wbcd_train, test=wbcd_test,
    cl=wbcd_train_labels, k=21)

pred #테스트 데이터에 대한 예측값
wbcd_test_labels #실제값

install.packages("gmodels")
library(gmodels)

CrossTable(x=wbcd_test_labels, y=pred) #교차표(예측값과 실제값을 비교)


write.csv(data.frame(pred), "pred.csv")


head(read.csv("train.csv"),2)
head(read.csv("test.csv"),2)
head(read.csv("gender_submission.csv"),2)

# df<-data.frame(PassengerId=아이디저장된변수이름, Survived=예측결과가저장된변수이름)
# write.csv(df, "제출파일명.csv")



df<-data.frame(PassengerId=, Survived=예측결과가저장된변수이름)





