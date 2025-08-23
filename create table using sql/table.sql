create table Users(
    id int auto_increment primary key,
    name varchar(30) not null,
    email varchar(50) not null unique
);

create table Buses(
    id int auto_increment primary key,
    busNumber int not null unique,
    totalSeats int not null,
    availableSeats int not null
);

create table Bookings(
    id int auto_increment primary key,
    seatNumber int not null,
    userId int,
    busId int,
    foreign key (userId) references Users(id),
    foreign key (busId) references Buses(id)
);

create table Paymments(
    id int auto_increment primary key,
    amountPaid int not null,
    paymentStatus enum('PENDING', 'COMPLETED', 'FAILED'),
    bookingId int,
    foreign key(bookingId) references Bookings(id)

)