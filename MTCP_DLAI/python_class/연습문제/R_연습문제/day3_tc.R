# iris
# 
# #1) 꽃잎 길이/두께 -> 군집화(3)
# #2) 꽃받침 길이/두께 -> 군집화(3)
# #3) 꽃잎,꽃받침 길이/두께 -> 군집화(3)
# # => 시각화 및 해석 => 카페 제출
# 
# iris
# 
# library(dplyr)
# 
# iris_p <- iris %>% select(Sepal.Length,Sepal.Width,Petal.Length,Petal.Width)
# 
# 
# 
# #1
# 
# iris_sepal <- iris_p %>% select(Sepal.Length,Sepal.Width)
# iris_sepal
# 
# iris_sepal_z <- as.data.frame(lapply(iris_sepal,scale))
# 
# iris_sepal_z
# 
# 
# 
# sepal_clusters <- kmeans(iris_sepal_z,3)
# 
# sepal_clusters
# 
# iris$sepal_cluster <- sepal_clusters$cluster
# 
# iris$setosa <- ifelse(iris$Species =='setosa' & !is.na(iris$Species),1,0)
# 
# aggregate(data = iris, setosa ~sepal_cluster,mean)
# 
# ggplot(data=iris, aes(x=Sepal.Length,y=Sepal.Width, col=sepal_cluster))+geom_point()
# 
# 
# iris_Petal <- iris_p %>% select(Petal.Length,Petal.Width)
# 
# iris_Petal
# 
# iris_Petal_z  <- as.data.frame(lapply(iris_Petal,scale))
# 
# iris_Petal_z
# 
# Petal_clusters <- kmeans(iris_Petal_z,3)
# 
# Petal_clusters
# 
# iris$Petal_cluster <- Petal_clusters$cluster
# 
# iris$Petal_cluster
# 
# iris$versicolor <- ifelse(iris$Species == 'versicolor' & !is.na(iris$Species),1,0)
# 
# aggregate(data = iris, versicolor ~Petal_cluster,mean)
# 
# ggplot(data=iris, aes(x=Petal.Length,y=Petal.Width, col=Petal_cluster))+geom_point()
# 
# 
# 
# #kmeans -> 몇개의 클러스터? 엘보(elbow)그래프 -> k+means(k means++)
# #k=2,3,...,20
# 
# #h-clustering
# 
# #DBSCAN : 반경 x(Eps) 이내에 점이 n(MinPts)개 이상 있으면 하나의 클러스터가 됨
# # x : 반경
# # n : 점의 개수
# 
# # 점 p가 반경 x(Eps)이내에 점을 n개 이상 가지고 있다면 -> 클러스터 ->
# #   이때 p를 클러스터의 중심점(core point)이라고 함
# 
# 
# 신문기사를 5개의 클러스터로 클러스터링(각 클러스터의 의미는 모름)
# kmeans?
#   
#   국내 연구진이 개발한 인공지능(AI)에게 '출장 경비가 100만원 들 때, 결재를 어느 선까지 받아야 할까'라고 물었다. AI는 행정문서 파일을 검색한 뒤 '100만 원 이하인 경우, 실장 전결'이라고 답했다. 또한 사내 규정이 담긴 문서파일과 그 근거부분까지 찾아 보여줬다.
# 한국전자통신연구원(ETRI)은 언어지능연구실 임준호 박사팀이 사용자가 질문하면 문서파일을 검색해 정답을 알려주는 '행정문서QA' 어플리케이션 프로그램 인터페이스(API)를 개발했다고 7일 밝혔다. 또한 두 문장이 같은 의미인지 이해하는 '패러프레이즈' API도 개발했다. 연구진은 필요한 내용을 빠르게 파악해 업무 생산성을 높이고 정보 공유와 활용도를 높이는 데 도움이 될 것이라고 전망했다.
#   
# 이 기술은 ETRI 공공 인공지능 오픈 API·데이터 서비스 포털에 공개돼 누구나 쉽게 이용할 수 있다. 임준호 박사는 "이 기술로 한국어 AI 서비스 시장
# 연구진은 공동연구기관인 한글과컴퓨터에서 블라인드 평가로 정확도를 측정했다. 그 결과, 단락을 대상으로 검색해 나온 상위 5개 결과의 정확도는 89.65%, 표를 대상으로 진행한 검색에서는 81.5%로 높은 정확도를 보였다.
# 
# ...
# 
# 텍스트데이터 -> 단어(형태소 분석, 국내, 연구진, ...)
# -> 불필요한 형태소(단어, stopwords, 불용어) 제거
# 
# kmeans?신문기사가 유사한 것끼리 클러스터링 -> 5개 클러스터 생성
# 
# 신문기사1(학생1) : 기술, 공공, ...
# ...
# 신문기사10000(학생30000) : 한글, 에트리, ..
# 
#                 기술, 공공, ... 한글, 에트리, .... (30개 열)
# 신문기사1        0     1    ...   
# ...
# 신문기사10000
# 
# 데이터프레임 크기 : 10000 * 30
# 
# -> 표준화 -> 유클리디안 거리 기반 kmeans 수행
# -> 5개 클러스터


#DBSCAN 
install.packages("fpc")
library(fpc)
library(ggplot2)

data<-data.frame(cbind(c(sample(1:10,30,replace = T),sample(20:30,20,replace = T)),
c(sample(1:10,30,replace = T),sample(20:30,20,replace = T))))

data

ggplot(data)+
  geom_hline(yintercept = 1:30, colour='grey')+
  geom_vline(xintercept = 1:30, colour='grey')+
  geom_point(aes(x=X1, y=X2))+
  theme_classic()

db<-dbscan(data, eps=sqrt(20), MinPts =2)
db
db$cluster
db$isseed

#        0  1  2
# border 1  0  3
# seed   0 30 16
# total  1 30 19

#0 : 노이즈(아웃라이어)

library(RColorBrewer)
ggplot(data)+
  geom_hline(yintercept = 1:30, colour='grey')+
  geom_vline(xintercept = 1:30, colour='grey')+
  geom_point(aes(x=X1, y=X2, col=as.factor(db$cluster)))+
  geom_point(data=data[!db$isseed,], aes(X1,X2), shape=8)+
  theme_bw()


#data[!db$isseed,]
